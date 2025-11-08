import { z } from "zod";

const commaList = z
  .string()
  .transform(s => s.split(",").map(v => v.trim()).filter(Boolean))
  .refine(arr => arr.length > 0, "empty list");

export const EventSearchSchema = z.object({
  event_id: z.string().optional(),              // "1,2,3"
  keyword: z.string().optional(),               // "Python,池袋" => AND検索はv2ではkeyword(AND)/keyword_or(OR)
  keyword_or: z.string().optional(),
  ym: z.string().optional(),                    // "202511,202512"
  ymd: z.string().optional(),                   // "20251108,20251109"
  nickname: z.string().optional(),
  owner_nickname: z.string().optional(),
  group_id: z.string().optional(),
  subdomain: z.string().optional(),             // "aws,reactjp" など
  prefecture: z.string().optional(),            // "東京都,神奈川県" など
  order: z.enum(["1","2","3","updated_at","started_at","newest"]).optional(),
  start: z.coerce.number().int().min(1).optional(),
  count: z.coerce.number().int().min(1).max(100).optional(),
});

export function normalizeParams(input: URLSearchParams) {
  const obj = Object.fromEntries(input.entries());
  const parsed = EventSearchSchema.parse(obj);

  // v2は複数値をカンマ連結で渡す仕様（公式/SDK実装に準拠）
  // order は 1(updated_at) / 2(started_at) / 3(newest) もしくはシンボル
  const orderMap: Record<string, number> = {
    updated_at: 1,
    started_at: 2,
    newest: 3,
  };

  const out: Record<string, string | number> = {};
  for (const k of [
    "event_id","keyword","keyword_or","ym","ymd","nickname",
    "owner_nickname","group_id","subdomain","prefecture"
  ] as const) {
    if (parsed[k]) out[k] = String(parsed[k]);
  }
  if (parsed.order) {
    out.order = isNaN(Number(parsed.order))
      ? orderMap[String(parsed.order)] ?? 1
      : Number(parsed.order);
  }
  if (parsed.start) out.start = parsed.start;
  if (parsed.count) out.count = parsed.count;

  return out;
}
