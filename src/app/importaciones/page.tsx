import type { Metadata } from "next";
import ImportsContent from "@/components/services/ImportsContent";

export const metadata: Metadata = {
  title: "Importaciones",
  description:
    "Acompañamiento en importaciones: gestión de proveedores, análisis comercial, coordinación logística, asesorías y mejora continua.",
};

export default function ImportsPage() {
  return <ImportsContent />;
}
