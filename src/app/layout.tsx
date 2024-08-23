import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "César García Cabeza - Data Scientist | Software Engineer",
  description: "Welcome to my portfolio. I am a Data Scientist specializing in AI, Cloud Data Engineering, and Data Science. Explore my projects and experience.",
  keywords: [
    "César García Cabeza",
    "César García",
    'Data Science',
    'Artificial Intelligence',
    'Cloud Data Engineering',
    'Portfolio',
    'Machine Learning',
    'Python',
    'AWS',
    'GCP',
    'Docker',
    'ETL',
    'CI/CD',
  ],
  authors: [
    {
      name: 'César García Cabeza',
      url: 'https://www.linkedin.com/in/cesargarciacabeza/',
    },
  ],
  icons: {
    icon: 'favicon.png',
    shortcut: 'favicon.png',
    apple: 'favicon.png',  // Optional, if you have an apple-touch-icon
    other: [
      {
        rel: 'icon',
        url: 'favicon.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
