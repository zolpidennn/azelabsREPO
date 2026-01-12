import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Azelabs | Desenvolvimento de Software Sob Medida",
  description:
    "Transformamos suas ideias em solucoes digitais. Desenvolvimento de aplicativos, sites, PWA, TWA e plataformas web personalizadas.",
  keywords: ["desenvolvimento de software", "aplicativos", "PWA", "TWA", "sites", "Node.js", "Brasil"],
  applicationName: "Azelabs",
  authors: [{ name: "Azelabs" }],
  generator: "Next.js",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Azelabs",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Azelabs",
    title: "Azelabs | Desenvolvimento de Software Sob Medida",
    description:
      "Transformamos suas ideias em solucoes digitais. Desenvolvimento de aplicativos, sites, PWA, TWA e plataformas web personalizadas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azelabs | Desenvolvimento de Software Sob Medida",
    description:
      "Transformamos suas ideias em solucoes digitais. Desenvolvimento de aplicativos, sites, PWA, TWA e plataformas web personalizadas.",
  },
  icons: {
    icon: [
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon-light-32x32.jpg", media: "(prefers-color-scheme: light)" },
    ],
    apple: "/apple-touch-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0b1a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
