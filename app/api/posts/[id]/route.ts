import { NextResponse } from "next/server";

export async function GET(context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const res = await fetch(`https://dummyjson.com/posts/${id}`);
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}
