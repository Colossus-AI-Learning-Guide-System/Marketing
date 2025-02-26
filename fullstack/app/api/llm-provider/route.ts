import { NextResponse } from "next/server";


export async function GET() {
  try {
    // Get the current LLM provider from environment variable
    const currentProvider = process.env.CURRENT_LLM_PROVIDER || "OpenAI";

    // Return the provider name with proper capitalization
    const formattedProvider =
      currentProvider.toLowerCase() === "deepseek" ? "DeepSeek" : "OpenAI";

    return NextResponse.json({
      success: true,
      provider: formattedProvider,
    });
  } catch (error) {
    console.error("Error getting LLM provider:", error);
    return NextResponse.json(
      {
        success: false,
        provider: "Unknown",
      },
      { status: 500 }
    );
  }
}
