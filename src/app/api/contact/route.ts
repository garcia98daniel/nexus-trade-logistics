import { NextResponse } from "next/server";
import { hasErrors, validateContact, validateQuote } from "@/lib/validation";
import { sendRequestEmail } from "@/lib/email";
import type { ContactData, QuoteData, SubmitPayload } from "@/types";

const MAX_FIELD_LENGTH = 5000;

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as SubmitPayload | null;
  if (!payload || (payload.kind !== "quote" && payload.kind !== "contact") || !payload.data) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
  if (Object.values(payload.data).some((v) => typeof v !== "string" || v.length > MAX_FIELD_LENGTH)) {
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
  try {
    await sendRequestEmail(payload, referenceId);
  } catch (error) {
    console.error(`[contact] ${referenceId} email failed:`, error instanceof Error ? error.message : error);
    return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ referenceId }, { status: 201 });
}
