import { posts } from "@/data";
import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({ posts });
  return response;
}
