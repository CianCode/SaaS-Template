import type { Metadata } from "next";
import React from "react";

import "./globals.css";

// Define default app name if not in environment variables
const APP_NAME = process.env.APP_NAME ?? "SaaS Template";

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`, // Used when a page sets its title
    default: APP_NAME, // Used when a page doesn't set its title
  },
  description:
    "A SaaS Template built with Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
