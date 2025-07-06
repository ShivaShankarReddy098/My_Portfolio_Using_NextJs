import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Analytics } from "@vercel/analytics/react";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-family",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Shiva Shankar Reddy",
  description: "Shiva Shankar Reddy - Software Engineer",
  openGraph: {
    title: "Shiva Shankar Reddy",
    description: "Shiva Shankar Reddy - Software Engineer",
    url: "https://my-portfolio-using-next-js.vercel.app/",
    //   siteName: "Shiva Shankar Reddy",
    //   images: [
    //     {
    //       url: "https://shiva.dev/og-image.png",
    //       width: 1200,
    //       height: 630,
    //       alt: "Shiva Shankar Reddy - Software Engineer",
    //     },
    //   ],
    //   locale: "en_US",
    //   type: "website",
    // },
    // twitter: {
    //   card: "summary_large_image",
    //   title: "Shiva Shankar Reddy",
    //   description: "Shiva Shankar Reddy - Software Engineer",
    //   images: ["https://shiva.dev/og-image.png"],
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
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        <ChakraProvider>{children}</ChakraProvider>
        <Analytics />
      </body>
    </html>
  );
}
