import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import StoreProvider from "@/components/providers/StoreProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "NEXUS TRADE & LOGISTICS | Comercio internacional y logística",
    template: "%s | NEXUS TRADE & LOGISTICS",
  },
  description:
    "Conectamos la riqueza productiva de nuestro territorio con los mercados del mundo mediante soluciones integrales de logística y comercio internacional.",
  icons: { icon: "/images/logo-nexus.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${dmSans.variable} ${playfair.variable} antialiased`}>
        <StoreProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </StoreProvider>
      </body>
    </html>
  );
}
