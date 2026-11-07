import { NextResponse } from "next/server";
import { hasErrors, validateContact, validateQuote } from "@/lib/validation";
import type { ContactData, QuoteData, SubmitPayload } from "@/types";

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as SubmitPayload | null;
  if (!payload || (payload.kind !== "quote" && payload.kind !== "contact") || !payload.data) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const errors =
    payload.kind === "quote"
      ? validateQuote(payload.data as QuoteData)
      : validateContact(payload.data as ContactData);
  if (hasErrors(errors)) {
    return NextResponse.json({ error: "Validation failed", fields: errors }, { status: 422 });
  }

  const referenceId = `NX-${Date.now().toString(36).toUpperCase()}`;
  return NextResponse.json({ referenceId }, { status: 201 });
}
