import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    const body = await req.json();
    const { prompt } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!prompt) {
      return new NextResponse("prompt is required", { status: 400 });
    }

    // iterate to find the correct solution for this, no audio file returned, #TODO

    const response = await replicate.run(
      "tencent/hunyuan-video:6c9132aee14409cd6568d030453f1ba50f5f3412b844fe67f78a9eb62d55664f",
      {
        input: {
          fps: 24,
          width: 864,
          height: 480,
          prompt: "A cat walks on the grass, realistic style",
          infer_steps: 50,
          video_length: 129,
          embedded_guidance_scale: 6,
        },
      }
    );

    console.log(JSON.stringify(response));

    return NextResponse.json(response);
  } catch (error) {
    console.log("VIDEO_ERROR", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
