"use client";

import styled, { useTheme } from "styled-components";
import { Card } from "@/components/main/Card";
import { BigCard } from "@/components/main/BigCard";
import { seasonalOrem, weatherCard } from "@/assets/icon";
import Typo from "@/components/common/Typo";
import { useRouter } from "next/navigation";
import { useState } from "react";
import KakaoLoginButton from "@/components/KakaoLoginButton";
import { useQuery } from "@tanstack/react-query";
import { getWeather } from "@/api";

const weatherMap: Record<string, string> = {
  Thunderstorm: "cloud",
  Drizzle: "rain",
  Rain: "rain",
  Snow: "snow",
  Atmosphere: "cloud",
  Clear: "sunny",
  Clouds: "cloud",
};

export default function Home() {
  const theme = useTheme();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickHistory = () => {
    // 로그인 되어 있으면
    const isLogin = localStorage.getItem("uuid");
    if (isLogin) {
      router.push("/orem-history");
    } else {
      setIsModalOpen(true);
    }
  };

  const { data: weatherRes } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather(),
    select: (res) => res.data,
    staleTime: 1000 * 60 * 30,
  });

  return (
    <>
      <Container>
        <LogoContainer>
          {seasonalOrem.spring}
          {seasonalOrem.summer}
          {seasonalOrem.autumn}
          {seasonalOrem.winter}
        </LogoContainer>
        <CardContainer>
          <SvgContainer>
            <Typo
              size={16}
              weight="semi-bold"
              color={theme.gray07}
              style={{ position: "absolute", left: 20, top: 16, zIndex: 10 }}
            >
              오늘 제주 날씨
            </Typo>
            {!!weatherRes?.weather?.[0].main && weatherCard[weatherMap[weatherRes?.weather?.[0].main]]}
            {weatherRes && (
              <Typo
                size={36}
                weight="bold"
                color={theme.gray07}
                style={{ position: "absolute", right: 20, bottom: 16 }}
              >
                {Math.floor(weatherRes?.main?.temp)}°C
              </Typo>
            )}
          </SvgContainer>

          <Card
            title={`내가 다녀온\n오름 보기`}
            icon={
              <div style={{ width: "100%", display: "flex", justifyContent: "end", position: "relative" }}>
                <svg
                  style={{ width: "100%" }}
                  width="200"
                  height="100"
                  viewBox="0 0 163 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="13.5" cy="131.5" r="111.5" fill="#6C8169" />
                  <circle cx="146" cy="117" r="117" fill="#80A77A" />
                </svg>
              </div>
            }
            bg="#fff"
            onClick={handleClickHistory}
          />
          <BigCard
            title="오름 추천 받기"
            subTitle="여행 계절에 맞는 오름을 추천드려요"
            icon={{ color: "#D5C9BA", position: "left" }}
            onClick={() => router.push("/season-recommendations-input")}
          />
          <BigCard
            title="내 오름과 식물 친구 만들기"
            subTitle="생일에 맞는 제주 오름과 식물을 알려드려요"
            icon={{ color: "#90A68D", position: "right", hasFace: true }}
            onClick={() => router.push("/birthdate-recommendations-input")}
          />
        </CardContainer>
        <Typo size={16} weight="regular" color={theme.gray05} style={{ textAlign: "center", marginTop: "36px" }}>
          소중한 제주의 자연을 지켜요
        </Typo>
      </Container>
      <ModalWrapper onClick={() => setIsModalOpen(false)} isShow={isModalOpen}>
        <Modal onClick={(e) => e.stopPropagation()}>
          <div
            style={{ display: "flex", justifyContent: "end", cursor: "pointer" }}
            onClick={() => setIsModalOpen(false)}
          >
            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.429688 18.6094C0.257812 18.4453 0.144531 18.25 0.0898438 18.0234C0.0351562 17.7969 0.0351562 17.5703 0.0898438 17.3438C0.152344 17.1172 0.265625 16.9258 0.429688 16.7695L7.625 9.55078L0.429688 2.34375C0.265625 2.1875 0.15625 1.99609 0.101562 1.76953C0.046875 1.54297 0.046875 1.31641 0.101562 1.08984C0.15625 0.863281 0.265625 0.667969 0.429688 0.503906C0.601562 0.332031 0.800781 0.21875 1.02734 0.164062C1.25391 0.109375 1.48047 0.109375 1.70703 0.164062C1.93359 0.21875 2.12891 0.328125 2.29297 0.492188L9.5 7.69922L16.6953 0.492188C16.8594 0.320312 17.0547 0.210938 17.2812 0.164062C17.5078 0.109375 17.7305 0.109375 17.9492 0.164062C18.1758 0.21875 18.3789 0.332031 18.5586 0.503906C18.7227 0.667969 18.832 0.863281 18.8867 1.08984C18.9492 1.31641 18.9492 1.54297 18.8867 1.76953C18.832 1.98828 18.7227 2.18359 18.5586 2.35547L11.3633 9.55078L18.5586 16.7578C18.7227 16.9297 18.832 17.1289 18.8867 17.3555C18.9414 17.5742 18.9414 17.7969 18.8867 18.0234C18.832 18.25 18.7227 18.4453 18.5586 18.6094C18.3867 18.7812 18.1875 18.8945 17.9609 18.9492C17.7344 19.0039 17.5078 19.0039 17.2812 18.9492C17.0547 18.8945 16.8594 18.7852 16.6953 18.6211L9.5 11.4141L2.29297 18.6211C2.12891 18.7852 1.93359 18.8945 1.70703 18.9492C1.48828 19.0039 1.26172 19.0039 1.02734 18.9492C0.800781 18.8945 0.601562 18.7812 0.429688 18.6094Z"
                fill="#1D1D1D"
              />
            </svg>
          </div>

          <TypoList>
            <Typo size={20} weight="bold" color={theme.gray07} style={{ marginBottom: 16, textAlign: "center" }}>
              로그인이 필요한 기능이에요
            </Typo>
            <Typo size={14} weight="regular" color={theme.gray04} style={{ textAlign: "center" }}>
              로그인 한 뒤 다녀온 오름을 저장할 수 있어요
            </Typo>
          </TypoList>
          <KakaoLoginButton />
        </Modal>
      </ModalWrapper>
    </>
  );
}

const ModalWrapper = styled.div<{ isShow: boolean }>`
  z-index: 99;
  background-color: rgba(41, 41, 41, 0.4);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 24px;
  width: 100vw;
  height: 100vh;
  display: ${({ isShow }) => (isShow ? "flex" : "none")};
  align-items: center;
`;
const Modal = styled.div`
  background-color: #fff;
  width: 100%;
  height: 280px;
  border-radius: 28px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TypoList = styled.div``;
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  > * {
    margin-left: -5px;
  }
`;

const Container = styled.div`
  padding: 40px 24px 0 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
`;
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;
const SvgContainer = styled.div`
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.gray03};

  svg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
`;
