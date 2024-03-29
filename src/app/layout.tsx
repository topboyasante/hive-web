import { Provider } from "@/components/provider/app-provider";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hive",
  description: "Your Task Outsourcing Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <Provider>{children}</Provider>
        <Toaster />
      </body>
    </html>
  );
}
