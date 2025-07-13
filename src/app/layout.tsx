import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./styles/globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "CV Builder",
  description: "Landing page for CV Builder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
