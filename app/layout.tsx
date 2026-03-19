import type { Metadata } from "next"
import { Syne, Outfit } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600"],
})

export const metadata: Metadata = {
  title: "DigitalFrame — Moderne Digitale Erlebnisse",
  description: "Premium Web Development mit interaktiven 3D-Erlebnissen",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" suppressHydrationWarning className={cn(syne.variable, outfit.variable)}>
      <body className="antialiased bg-[#080808] text-[#F0EDE8]" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
