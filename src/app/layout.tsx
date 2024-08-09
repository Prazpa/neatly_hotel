"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <Link rel="icon" href="../../public/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <SessionProvider>
          <NextUIProvider>{children}</NextUIProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
