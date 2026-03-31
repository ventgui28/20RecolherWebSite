import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "20 Recolher | Gestão Profissional de Resíduos em Cantanhede",
    template: "%s | 20 Recolher"
  },
  description: "Líder em Cantanhede na recolha e gestão de REEE (resíduos eletrónicos) e consumíveis. Soluções sustentáveis e certificadas para empresas e entidades públicas.",
  keywords: ["recolha de resíduos", "REEE", "Cantanhede", "gestão ambiental", "reciclagem eletrónica", "Portugal", "sustentabilidade industrial"],
  authors: [{ name: "20 Recolher" }],
  creator: "20 Recolher",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://20recolher.pt",
    siteName: "20 Recolher",
    title: "20 Recolher | Gestão Profissional de Resíduos",
    description: "Serviços de elite em gestão de resíduos eletrónicos e industriais em Cantanhede.",
    images: [
      {
        url: "/og-image.jpg", // A ser adicionada posteriormente
        width: 1200,
        height: 630,
        alt: "20 Recolher - Gestão de Resíduos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "20 Recolher | Gestão de Resíduos",
    description: "Soluções sustentáveis de elite em Cantanhede.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col text-[#111111] grain-overlay">
        <div className="bg-luxury-layers" />
        <div className="bg-luxury-layers-grain" />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
