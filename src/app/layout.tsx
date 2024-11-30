import { NavLinks } from '@/app/ui/nav-links'


import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "27pro",
  description: "Generated by create next app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavLinks />
        <main>{ children }</main>
      </body>
    </html>
  )
}
