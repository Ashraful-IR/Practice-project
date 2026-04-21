import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavPage from "@/component/Navbar/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Practice Project",
  description:
    "A simple practice project using Next.js, Tailwind CSS, and DaisyUI",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme=""
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavPage />
        <main>{children}</main>
      </body>
    </html>
  );
}
