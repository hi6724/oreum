import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeClient from "../components/ThemeClient";
import Head from "next/head";
import StyledComponentsRegistry from "../components/StyledComponentsRegistry";
import { ReactQueryClientProvider } from "../components/ReactQueryClientProvider";
import Transition from "@/components/Transition";
import KakaoScript from "@/components/KakaoScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "어떵오름",
  description: "나와 제주의 자연을 잇는 서비스",
  icons: {
    icon: "/favicon.png",
  },
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
        <body className={inter.className} style={{ display: "flex", justifyContent: "center", background: "#dcdcdc" }}>
          <div
            style={{
              position: "relative",
              maxWidth: "400px",
              width: "100%",
              overflowX: "hidden",
              background: "#f1f1f1",
            }}
          >
            <KakaoScript />
            <Transition>
              <ThemeClient>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
              </ThemeClient>
            </Transition>
          </div>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
