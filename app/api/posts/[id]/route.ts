import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const segments = url.pathname.split("/"); // ['', 'api', 'posts', '1']
    const id = segments[segments.length - 1]; // последний сегмент

    const res = await fetch(`https://dummyjson.com/posts/${id}`);
    if (!res.ok) throw new Error("Failed to fetch API post");

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}
