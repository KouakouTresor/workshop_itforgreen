"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/organisms";
import "../styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="png" href="/logo.png" />
      </head>
      <body>
        {pathname === "/auth" ? null : <Header />}
        {children}
      </body>
    </html>
  );
}
