"use client";

import { ThemeProvider, createGlobalStyle } from "styled-components";

export const lightTheme = {
  white: "#fff",
  gray01: "#e7e7e7",
  gray02: "#dcdcdc",
  gray03: "#c7c7c7",
  gray04: "#8b8b8b",
  gray05: "#646464",
  gray06: "#292929",
  gray07: "#1d1d1d",
  black: "#000",
  green01: "#90a68d",
  green02: "#80a77a",
  green03: "#5d8058",
  green04: "#34582e",
  bg: "#f1f1f1",
  beige01: "#eae6e0",
  beige02: "#dbd6ce",
  beige03: "#c7bbab",
  pink: "#d67c7c",
  yello: "#e7c177",
  orange: "#e59256",
  blue: "#a1cad7",
};

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }
  body{
    background-color: #F1F1F1;
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
