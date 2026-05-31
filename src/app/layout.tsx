import type { Metadata } from "next";
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from "next-themes";
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});


const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: "ARCT | Architectural Portfolio",
  description: "Professional architectural portfolio showcasing modern design, landscape planning, and structural innovation. Built by a Frontend Developer.",
  keywords: ["Architecture Portfolio", "Frontend Developer", "Next.js 15", "Architectural Design", "Web Development"],
  authors: [{ name: "Recordline1" }],
  openGraph: {
    title: "ARCT | Architectural Portfolio",
    description: "Modern architectural projects and design solutions.",
    url: "https://arct-ten.vercel.app", 
    siteName: "ARCT Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARCT | Architectural Portfolio",
    description: "Modern architectural projects and design solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased h-screen w-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
