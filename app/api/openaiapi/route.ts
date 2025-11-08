// app/api/openai/chat/route.ts
import OpenAI from "openai";
import { NextResponse, type NextRequest } from "next/server";

export const runtime = "nodejs";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is missing");
}

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

type ChatMessage = { role: "user" | "system" | "assistant"; content: string };

export async function POST(req: NextRequest) {
  const { messages } = (await req.json()) as { messages: ChatMessage[] };

  const stream = await client.responses.stream({
    model: "gpt-4o-mini",
    input: messages.map((m) => ({ role: m.role, content: m.content })),
  });

  // ここがポイント：SDKのヘルパーでWeb ReadableStream化
  const readable = stream.toReadableStream();

  return new NextResponse(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
