import type { Metadata } from "next";
import OperationsContent from "@/components/services/OperationsContent";

export const metadata: Metadata = {
  title: "Gestión integral de operaciones",
  description:
    "Gestión integral de operaciones comerciales: proveedores, análisis comercial, coordinación logística multimodal y acompañamiento al cliente.",
};

export default function OperationsPage() {
  return <OperationsContent />;
}
