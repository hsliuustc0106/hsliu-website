import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hongsheng Liu - Research Scientist",
  description: "Research Scientist at Huawei 2012 Lab specializing in LLM Serving (vLLM & vLLM-Ascend) and AI4Science. Expert in large language model optimization and scientific computing.",
  keywords: "research scientist, LLM serving, vLLM, vLLM-Ascend, AI4Science, Huawei 2012 Lab, machine learning, scientific computing",
  authors: [{ name: "Hongsheng Liu" }],
  openGraph: {
    title: "Hongsheng Liu - Research Scientist",
    description: "Research Scientist specializing in LLM Serving and AI4Science",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
