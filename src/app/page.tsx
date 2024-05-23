"use client";

import { Cloud } from "@/assets/icon";
import Button from "@/components/common/Button";
import Typo from "@/components/common/Typo";
import { useRouter } from "next/navigation";
import styled, { useTheme } from "styled-components";

export default function Home() {
  const theme = useTheme();
  const router = useRouter();
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
        <Button style={{ cursor: "pointer" }} onClick={() => router.push("/home")}>
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

export function KakaoLoginButton() {
  const router = useRouter();

  const handleKakaoLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/oauth",
      scope: ["profile_nickname", "account_email"].join(","),
    });
  };

  return (
    <KakaoButton onClick={handleKakaoLogin}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: "24px", height: "24px" }}>
        <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
      </svg>
      <Typo size={16}>카카오 로그인</Typo>
      <div style={{ width: "30px" }}></div>
    </KakaoButton>
  );
}

const KakaoButton = styled.div`
  cursor: pointer;
  background-color: #fee500;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  width: 100%;
  border-radius: 1000px;
`;
