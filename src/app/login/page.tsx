"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <TitleWrapper>
        <h1>
          제주 오름 <br /> 추천과 생성
        </h1>
        <Sun />
      </TitleWrapper>

      <BottomContainer>
        <KakaoLoginButton />
        <Link href={"/"}>건너뛰기</Link>
      </BottomContainer>
      <BigCircle />
    </Container>
  );
}

const BottomContainer = styled.div`
  position: fixed;
  bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 24px;
  a {
    color: white;
    font-size: 16px;
    line-height: 130%;
  }
`;
const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

const TitleWrapper = styled.div`
  h1 {
    font-size: 36px;
    line-height: 140%;
    font-weight: bold;
  }
  padding: 93px 24px;
`;

const Sun = styled.div`
  background-color: #e59256;
  border-radius: 100%;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 12px;
  right: 26px;
`;
const BigCircle = styled.div`
  position: fixed;
  background-color: #5d8058;
  width: 1111px;
  height: 1111px;
  bottom: 0px;
  left: 50%;
  border-radius: 100%;
  z-index: -1;
  transform: translate(-50%, 50%);
`;

function KakaoLoginButton() {
  const router = useRouter();
  return (
    <KakaoButton
      onClick={() => {
        alert("카카오로그인!");
        router.push("/");
      }}
    >
      <div>아이콘</div>
      <p>카카오 로그인</p>
    </KakaoButton>
  );
}

const KakaoButton = styled.div`
  cursor: pointer;
  background-color: #fee500;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
