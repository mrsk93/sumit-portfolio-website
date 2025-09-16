import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat, Cedarville_Cursive, Lobster_Two } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { WhatsAppFloater } from "@/components/whatsapp-floater"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

const lobsterTwo = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lobster-two",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sumit Kumar Chalotra - Full Stack Developer",
  description:
    "Full Stack Developer with 4+ years of experience in MERN/MEAN, Python, AI, and modern web technologies. Building scalable and robust applications.",
  keywords: ["Full Stack Developer", "MERN Stack Developer", "MEAN Stack Developer", "Python Developer", "AI", "ReactJS Developer", 
    "Node.js", "TypeScript", "Next.js", "Express.js", "MongoDB", "Django", "FastAPI", "Flask", "Machine Learning", "Web Development"],
  authors: [{ name: "Sumit Kumar Chalotra" }],
  openGraph: {
    title: "Sumit Kumar Chalotra - Full Stack Developer",
    description:
      "Full Stack Developer with 4+ years of experience in MERN/MEAN, Python, AI, and modern web technologies.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${lobsterTwo.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <WhatsAppFloater />
        </ThemeProvider>
      </body>
    </html>
  )
}
