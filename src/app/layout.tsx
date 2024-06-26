import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header"



export const metadata: Metadata = {
  title: "Sistema de Usuários",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-200">
           <Header/>
          {children}
      </body>
    </html>
  );
}
