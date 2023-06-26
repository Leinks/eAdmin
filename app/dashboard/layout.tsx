// These styles apply to every route in the application
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import AuthStatus from "@/components/auth-status";
import { Suspense } from "react";
import MainLayout from "@/components/layout/MainLayout";
import MenuContextProvider from "context/MenuContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "Next.js Prisma Postgres Auth Starter";
const description =
  "This is a Next.js starter kit that uses Next-Auth for simple email + password login and a Postgres database to persist the data.";

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  metadataBase: new URL("https://nextjs-postgres-auth.vercel.app"),
  themeColor: "#141414",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
        <body className={inter.variable}>
        <MenuContextProvider>
          <Toaster />
            <Suspense fallback="Loading...">
                {/* "@ts-expect-error Async Server Component" */}
                
            </Suspense>
            <MainLayout>{children}</MainLayout> 
          </MenuContextProvider>
        </body>
  
    </html>
  );
}
