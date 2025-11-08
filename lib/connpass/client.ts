import { ConnpassApiError, ConnpassTimeoutError } from "./errors";
import type { ConnpassEventsResponse, EventSearchParams } from "./types";

export type ConnpassClientOptions = {
  apiKey: string;
  baseUrl?: string;          // 既定: https://connpass.com/api/v2
  timeoutMs?: number;        // 既定: 10_000
  defaultCount?: number;     // 既定: 30
  userAgent?: string;        // 既定: "ConnpassMap/1.0 (+https://example.com)"
  retries?: number;          // 429/5xxリトライ回数 既定: 2
};

export class ConnpassClient {
  private apiKey: string;
  private baseUrl: string;
  private timeoutMs: number;
  private defaultCount: number;
  private userAgent: string;
  private retries: number;

  constructor(opts: ConnpassClientOptions) {
    this.apiKey = opts.apiKey;
    this.baseUrl = (opts.baseUrl ?? "https://connpass.com/api/v2").replace(/\/$/, "");
    this.timeoutMs = opts.timeoutMs ?? 10_000;
    this.defaultCount = opts.defaultCount ?? 30;
    this.userAgent = opts.userAgent ?? "ConnpassMap/1.0 (+https://example.com)";
    this.retries = Math.max(0, opts.retries ?? 2);
  }

  /** イベント一覧 */
  async searchEvents(params: EventSearchParams = {}): Promise<ConnpassEventsResponse> {
    const url = new URL(this.baseUrl + "/events/");
    const p = { ...params };

    // デフォルト件数を補完
    if (!("count" in p)) p.count = this.defaultCount;

    // URLSearchParamsへ（undefinedは落とす）
    Object.entries(p).forEach(([k, v]) => {
      if (v === undefined || v === null) return;
      url.searchParams.set(k, String(v));
    });

    return await this.request<ConnpassEventsResponse>(url.toString());
  }

  /** 共通リクエスト（簡易リトライ＆バックオフ含む） */
  private async request<T>(url: string): Promise<T> {
    let attempt = 0;
    // 緩い指数バックオフ
    const backoff = (n: number) => new Promise(r => setTimeout(r, 300 * 2 ** n));

    while (true) {
      const ac = new AbortController();
      const timer = setTimeout(() => ac.abort(), this.timeoutMs);

      try {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "X-API-Key": this.apiKey,
            "User-Agent": this.userAgent, // UA付与推奨
          },
          signal: ac.signal,
          // API側のキャッシュ方針に従い no-store
          cache: "no-store",
        });

        if (!res.ok) {
          const text = await res.text().catch(() => "");
          // 429/5xx はリトライ
          if ((res.status === 429 || (res.status >= 500 && res.status < 600)) && attempt < this.retries) {
            attempt++;
            clearTimeout(timer);
            await backoff(attempt);
            continue;
          }
          throw new ConnpassApiError(`connpass upstream error: ${res.status}`, res.status, text);
        }

        const json = (await res.json()) as T;
        clearTimeout(timer);
        return json;
      } catch (e: any) {
        clearTimeout(timer);
        if (e?.name === "AbortError") {
          if (attempt < this.retries) {
            attempt++;
            await backoff(attempt);
            continue;
          }
          throw new ConnpassTimeoutError();
        }
        // ネットワーク系（ECONNRESET等）もリトライ
        if (attempt < this.retries) {
          attempt++;
          await backoff(attempt);
          continue;
        }
        throw e;
      }
    }
  }
}
