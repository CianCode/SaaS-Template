import React from "react";

import "@/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="relative mx-auto max-w-7xl">
        <div className="absolute -top-44 -right-60 h-60 w-xl rotate-[-10deg] transform-gpu rounded-full bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] blur-3xl md:right-0"></div>
      </div>
      {children}
    </div>
  );
}
