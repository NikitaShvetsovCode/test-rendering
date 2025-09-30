import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://dummyjson.com/posts");
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ posts: [] }, { status: 500 });
  }
}
