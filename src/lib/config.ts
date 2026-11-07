export const siteConfig = {
  name: "NEXUS TRADE & LOGISTICS",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, ""),
};

export const whatsappUrl = (message?: string) =>
  siteConfig.whatsapp
    ? `https://wa.me/${siteConfig.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`
    : null;
