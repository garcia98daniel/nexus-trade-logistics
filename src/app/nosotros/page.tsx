import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conozca quiénes somos, nuestra historia, misión, visión, valores, filosofía y propuesta de valor.",
};

export default function AboutPage() {
  return <AboutContent />;
}
