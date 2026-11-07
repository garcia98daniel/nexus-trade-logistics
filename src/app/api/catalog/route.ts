import { NextResponse } from "next/server";
import { catalog } from "@/data/catalog";

export function GET() {
  return NextResponse.json({ categories: catalog });
}
