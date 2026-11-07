import type { Category, SubmitPayload } from "@/types";

async function request<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body?.error ?? `Error ${response.status}`);
  return body as T;
}

export const getErrorMessage = (error: unknown) =>
  error instanceof Error ? error.message : "Unexpected error";

export const api = {
  fetchCatalog: () =>
    request<{ categories: Category[] }>("/api/catalog").then((res) => res.categories),
  submitRequest: (payload: SubmitPayload) =>
    request<{ referenceId: string }>("/api/contact", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};
