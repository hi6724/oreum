"use client";

import { ThemeProvider, createGlobalStyle } from "styled-components";

export const lightTheme = {
  green: "#34582E",
  stone: "#53504F",
  orange: "#EB7E30",
  yellow: "#FDCA68",
  gray: "#D9D9D9",
  black: "#292929",
  white: "#F1F1F1",
};

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }

`;

export default function ThemeClient({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
}
