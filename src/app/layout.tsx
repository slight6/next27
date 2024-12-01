
import { NavLinks } from '@/app/ui/nav-links';

import type { Metadata } from "next";
import "./globals.css";
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: "27pro",
  description: "Just my slice of the web.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavLinks />
        <main>{ children }</main>
        <Footer />
        <span className="flex justify-center">Copyright 2018-{new Date().getFullYear()}</span>
      </body>
    </html>
  )
}
