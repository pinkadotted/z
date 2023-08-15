import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LeftMenu from "@/_components/LeftMenu";
import Header from "@/_components/Header";
import { Providers } from "../providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Revamped Twitter",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} flex flex-col w-screen h-screen fixed`}
        >
          <Providers>
            <div className="px-60 overflow-auto">
              <Header />
              <main className="flex">
                <LeftMenu />
                <section className="flex flex-col w-4/5">
                  <div className="w-full">{children}</div>
                </section>
              </main>
            </div>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}