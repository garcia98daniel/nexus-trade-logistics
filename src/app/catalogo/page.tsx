import type { Metadata } from "next";
import CatalogView from "@/components/catalog/CatalogView";

export const metadata: Metadata = {
  title: "Catálogo de productos exportables",
  description:
    "Catálogo de productos colombianos exportables: agropecuarios, congelados, café y cacao, cereales, especias, productos del mar, materias primas y más.",
};

export default function CatalogPage() {
  return <CatalogView />;
}
