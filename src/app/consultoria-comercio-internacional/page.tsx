import type { Metadata } from "next";
import ConsultingContent from "@/components/services/ConsultingContent";

export const metadata: Metadata = {
  title: "Consultoría en comercio internacional",
  description:
    "Asesoría estratégica y transferencia de conocimiento para fortalecer capacidades, optimizar procesos y ganar competitividad en el comercio internacional.",
};

export default function ConsultingPage() {
  return <ConsultingContent />;
}
