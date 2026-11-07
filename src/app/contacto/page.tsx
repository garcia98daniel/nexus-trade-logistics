import type { Metadata } from "next";
import ContactView from "@/components/contact/ContactView";

export const metadata: Metadata = {
  title: "Contacto y cotizaciones",
  description: "Solicite una cotización de importación o exportación, o escríbanos para cualquier consulta.",
};

export default function ContactPage() {
  return <ContactView />;
}
