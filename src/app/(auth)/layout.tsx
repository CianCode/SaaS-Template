import type { Metadata } from "next";
import React from "react";

import "@/app/globals.css";

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
      <body>
        <div className="relative mx-auto max-w-7xl">
          <div className="absolute -top-44 -right-60 h-60 w-xl rotate-[-10deg] transform-gpu rounded-full bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] blur-3xl md:right-0"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
