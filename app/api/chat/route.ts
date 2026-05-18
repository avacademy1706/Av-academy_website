import { NextRequest, NextResponse } from "next/server";
import { generateChatbotPrompt } from "@/lib/siteContent";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    // ✅ Auto-generate prompt from latest site content
    const systemPrompt = generateChatbotPrompt();

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY || "",
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 500,
        system: systemPrompt,
        messages,
      }),
    });

    if (!response.ok) throw new Error("API error");

    const data = await response.json();
    const reply =
      data.content?.[0]?.text ||
      "Sorry, kuch technical issue aa gaya. Please +91-9675903348 pe call karein.";

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({
      reply:
        "Abhi technical issue hai. Please directly contact karein:\n📞 +91-9675903348\n📧 avacademy1706@gmail.com",
    });
  }
}
