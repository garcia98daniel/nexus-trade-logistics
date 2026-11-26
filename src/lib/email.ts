import { Resend } from "resend";
import type { SubmitPayload } from "@/types";

const DEFAULT_TO = "Operaciones@colombianexus.co";
const DEFAULT_FROM = "NEXUS Web <onboarding@resend.dev>";

const quoteLabels = {
  fullName: "Nombre y apellido",
  company: "Empresa",
  email: "Correo electrónico",
  phone: "Teléfono / WhatsApp",
  country: "País",
  operation: "Tipo de operación",
  product: "Producto o servicio de interés",
  volume: "Cantidad o volumen estimado",
  message: "Mensaje / requisitos adicionales",
};

const contactLabels = {
  name: "Nombre",
  company: "Empresa",
  email: "Correo electrónico",
  phone: "Teléfono / WhatsApp",
  subject: "Asunto",
  message: "Mensaje",
};

const operationNames: Record<string, string> = { import: "Importación", export: "Exportación" };

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const singleLine = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

function buildEmail(payload: SubmitPayload, referenceId: string) {
  const isQuote = payload.kind === "quote";
  const data = payload.data as unknown as Record<string, string>;
  const labels: Record<string, string> = isQuote ? quoteLabels : contactLabels;
  const value = (key: string) => {
    const raw = String(data[key] ?? "").trim();
    return key === "operation" ? (operationNames[raw] ?? raw) : raw;
  };

  const title = isQuote ? "Nueva solicitud de cotización" : "Nuevo mensaje de contacto";
  const who = singleLine(value(isQuote ? "fullName" : "name"));
  const subject = isQuote
    ? `${title} (${value("operation")}) - ${who} | ${referenceId}`
    : `${title}: ${singleLine(value("subject"))} - ${who} | ${referenceId}`;

  const rows = Object.entries(labels)
    .map(([key, label]) => {
      const v = value(key);
      return `<tr>
        <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;font-weight:600;color:#0a1d3d;width:38%;vertical-align:top">${escapeHtml(label)}</td>
        <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;color:#324a5e;white-space:pre-wrap">${v ? escapeHtml(v) : "<em style=\"color:#9ca3af\">—</em>"}</td>
      </tr>`;
    })
    .join("");

  const html = `<!doctype html>
<html><body style="margin:0;background:#eef1f6;font-family:Arial,Helvetica,sans-serif">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 12px">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border-radius:16px;overflow:hidden">
        <tr><td style="background:#0a1d3d;padding:24px 28px">
          <div style="color:#d4af37;font-size:12px;font-weight:700;letter-spacing:3px">NEXUS TRADE &amp; LOGISTICS</div>
          <div style="color:#ffffff;font-size:22px;font-weight:700;margin-top:6px">${escapeHtml(title)}</div>
          <div style="color:#d9d9d9;font-size:13px;margin-top:6px">Referencia: ${escapeHtml(referenceId)}</div>
        </td></tr>
        <tr><td style="padding:8px 14px 20px">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;line-height:1.5">${rows}</table>
        </td></tr>
        <tr><td style="padding:16px 28px;background:#f8fafc;color:#6b7280;font-size:12px">
          Enviado desde el formulario de la web. Responda a este correo para contestar directamente al cliente.
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

  const text = [
    `${title} — Referencia: ${referenceId}`,
    "",
    ...Object.entries(labels).map(([key, label]) => `${label}: ${value(key) || "—"}`),
  ].join("\n");

  return { subject, html, text, replyTo: value("email") };
}

export async function sendRequestEmail(payload: SubmitPayload, referenceId: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not configured");

  const { subject, html, text, replyTo } = buildEmail(payload, referenceId);
  const { error } = await new Resend(apiKey).emails.send({
    from: process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM,
    to: (process.env.CONTACT_TO_EMAIL || DEFAULT_TO).split(",").map((e) => e.trim()),
    replyTo,
    subject,
    html,
    text,
  });
  if (error) throw new Error(`Resend: ${error.message}`);
}
