"use client";

import { Cloud } from "@/assets/icon";
import KakaoLoginButton from "@/components/KakaoLoginButton";
import Button from "@/components/common/Button";
import Typo from "@/components/common/Typo";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styled, { useTheme } from "styled-components";

export default function Home() {
  const theme = useTheme();
  const router = useRouter();
  const token = localStorage.getItem("uuid");

  useEffect(() => {
    if (token) router.push("/home");
  }, [token, router]);

  return (
    <Container>
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
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

const BottomContainer = styled.div`
  position: fixed;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
  padding: 0 24px 44px 24px;
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
  position: fixed;
  background-color: #5d8058;
  width: 1000px;
  height: 1000px;
  top: -5%;
  left: 50%;
  transform: translate(-50%, 50%);
  border-radius: 100%;
  z-index: -1;
`;
