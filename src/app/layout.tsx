import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Maakon Budjettireseptit",
  description: "Hae ja  Maakon budjettireseptejä",
  openGraph: {
    title: "Maakon BudjettiReseptit",
    description: "Hae ja vertaile Maakon budjettireseptejä",
    images: [
      {
        url: '/logo.png',
        width: 500,
        height: 500,
        alt: 'Maakon Budjettireseptit Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Maakon Budjetti Huippulaadun Reseptit",
    description: "Hae ja vertaile Maakon budjettireseptejä",
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="flex min-h-screen flex-col items-center justify-start p-4 sm:p-8 md:p-24">
          {children}
        </main>
      </body>
    </html>
  );
}
