import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. Rodolphe Momier",
  description:
    "Quantum Automation Engineer at Quobly. PhD in atomic physics. Personal homepage with publications and conferences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
