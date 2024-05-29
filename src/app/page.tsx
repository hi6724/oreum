"use client";

import { Cloud } from "@/assets/icon";
import KakaoLoginButton from "@/components/KakaoLoginButton";
import Button from "@/components/common/Button";
import Typo from "@/components/common/Typo";
import { useRouter } from "next/navigation";
import { Suspense, useEffect } from "react";
import styled, { useTheme } from "styled-components";

export default function Home() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Container>
      <Suspense fallback={null}>
        <AutoLogin />
      </Suspense>
      <Typo
        size={36}
        weight="bold"
        style={{
          textAlign: "center",
          position: "absolute",
          top: "250px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          zIndex: 1,
        }}
      >
        나의 제주, <br /> 오름과 함께
      </Typo>
      <Sun />
      <Cloud style={{ position: "absolute", left: -9, top: 172 }} />
      <Cloud style={{ position: "absolute", right: -38, top: 330 }} />

      <BottomContainer>
        <KakaoLoginButton />
        <Button
          style={{ cursor: "pointer" }}
          onClick={() => {
            localStorage.removeItem("uuid");
            router.push("/home");
          }}
        >
          <Typo size={16} weight="bold" color={theme.bg}>
            둘러보기
          </Typo>
        </Button>
      </BottomContainer>
      <BigCircle />
    </Container>
  );
}

function AutoLogin() {
  const token = typeof window !== "undefined" ? localStorage.getItem("uuid") : "";
  const router = useRouter();
  useEffect(() => {
    if (token) router.replace("/home");
  }, [token, router]);
  return null;
}
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

const BottomContainer = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
  padding: 0 24px 44px 24px;
  z-index: 1;
`;

const Sun = styled.div`
  background-color: #e59256;
  border-radius: 100%;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 65px;
  right: 24px;
`;
const BigCircle = styled.div`
  position: absolute;
  background-color: #5d8058;
  width: 1000px;
  height: 1000px;
  top: -5%;
  left: 50%;
  transform: translate(-50%, 50%);
  border-radius: 100%;
`;
