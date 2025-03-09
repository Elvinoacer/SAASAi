import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!openai.apiKey) {
      return new NextResponse("OpenAI API Key not configures", { status: 500 });
    }

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

    const response = await openai.images.generate({
      prompt,
      n: parseInt(amount),
      size: resolution,

      // temperature: 0,
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("IMAGE_ERROR", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
