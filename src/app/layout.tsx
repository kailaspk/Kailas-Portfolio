import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kailas P K - Backend Software Engineer",
  description: "Backend Software Engineer with 5+ years of experience building scalable systems using Node.js, TypeScript, and microservices. Specialized in fintech, e-payments, and high-performance applications.",
  keywords: [
    "Backend Developer",
    "Software Engineer",
    "Node.js",
    "TypeScript",
    "Microservices",
    "API Development",
    "Fintech",
    "Kafka",
    "AWS",
    "Database Design"
  ],
  authors: [{ name: "Kailas P K" }],
  creator: "Kailas P K",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kailas-pk.vercel.app",
    title: "Kailas P K - Backend Software Engineer",
    description: "Building scalable backend systems that power millions. Experienced in Node.js, TypeScript, and microservices architecture.",
    siteName: "Kailas P K Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kailas P K - Backend Software Engineer",
    description: "Building scalable backend systems that power millions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
