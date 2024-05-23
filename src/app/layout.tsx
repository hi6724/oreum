import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeClient from "../components/ThemeClient";
import Head from "next/head";
import StyledComponentsRegistry from "../components/StyledComponentsRegistry";
import { ReactQueryClientProvider } from "../components/ReactQueryClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "구름타고오름",
  description: "구름타고오름",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="ko">
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
          />
        </Head>
        <body className={inter.className}>
          <ThemeClient>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </ThemeClient>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
