import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import Providers from "@/lib/Providers";
// import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Design Role | Home",
  description: "The Design Role is best portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html suppressHydrationWarning lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider attribute="class" defaultTheme="light">
            <div className="w-[98%] mx-auto p-1">
              <div className="min-h-screen">
                  {children}
                <Toaster />
              </div>
              {/* <ToastContainer /> */}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </Providers>
  );
}
