import type { Metadata } from "next";
import React from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "SaaS Template with NextJS",
  description:
    "A SaaS template built with Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
