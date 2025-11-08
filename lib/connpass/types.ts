export type EventSearchParams = Partial<{
  event_id: string;     // "1,2,3"
  keyword: string;      // AND
  keyword_or: string;   // OR
  ym: string;           // "202511,202512"
  ymd: string;          // "20251108,20251109"
  nickname: string;
  owner_nickname: string;
  group_id: string;
  subdomain: string;
  prefecture: string;   // 公式のパラメータに沿って必要分を追加
  order: string | number; // v2仕様の数値コードをそのまま渡す
  start: number;
  count: number;        // 1..100 推奨
}>;

export type ConnpassEvent = {
  event_id: number;
  title: string;
  event_url: string;
  started_at?: string;
  ended_at?: string;
  updated_at?: string;
  limit?: number;
  accepted?: number;
  waiting?: number;
  address?: string;
  place?: string;
  lat?: number;
  lon?: number;
  owner_nickname?: string;
  group?: { id: number; title?: string; url?: string; subdomain?: string } | null;
  // 必要に応じて増やす
};

export type ConnpassEventsResponse = {
  results_start: number;
  results_available: number;
  results_returned: number;
  events: ConnpassEvent[];
};
