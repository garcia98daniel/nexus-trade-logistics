import type { ContactData, QuoteData } from "@/types";

export type ValidationError = "required" | "email" | "phone";
export type FieldErrors<T> = Partial<Record<keyof T, ValidationError>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[\d\s()-]{7,20}$/;

function validate<T extends object>(data: T, required: (keyof T)[]): FieldErrors<T> {
  const errors: FieldErrors<T> = {};
  for (const field of required) {
    if (!String(data[field] ?? "").trim()) errors[field] = "required";
  }
  const record = data as Record<string, unknown>;
  if (!errors["email" as keyof T] && typeof record.email === "string" && !EMAIL_RE.test(record.email.trim()))
    errors["email" as keyof T] = "email";
  if (!errors["phone" as keyof T] && typeof record.phone === "string" && !PHONE_RE.test(record.phone.trim()))
    errors["phone" as keyof T] = "phone";
  return errors;
}

export const validateQuote = (data: QuoteData) =>
  validate(data, ["fullName", "company", "email", "phone", "country", "operation", "product"]);

export const validateContact = (data: ContactData) =>
  validate(data, ["name", "email", "phone", "subject", "message"]);

export const hasErrors = (errors: object) => Object.keys(errors).length > 0;
