import type { Metadata } from "next";
import ExportsContent from "@/components/services/ExportsContent";

export const metadata: Metadata = {
  title: "Exportaciones",
  description:
    "Llevamos la oferta de productos colombianos a mercados internacionales: identificación de oportunidades, representación comercial y coordinación logística.",
};

export default function ExportsPage() {
  return <ExportsContent />;
}
