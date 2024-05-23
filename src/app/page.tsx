"use client";

import styled, { useTheme } from "styled-components";
import { Card } from "../components/main/Card";
import { BigCard } from "../components/main/BigCard";
import { seasonalOrem, weatherCard } from "@/assets/icon";
import Typo from "@/components/common/Typo";
import { useRouter } from "next/navigation";

export default function Home() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Container>
      <LogoContainer>
        {seasonalOrem.spring}
        {seasonalOrem.summer}
        {seasonalOrem.autumn}
        {seasonalOrem.winter}
      </LogoContainer>
      <CardContainer>
        <SvgContainer>
          <Typo size={16} weight="semi-bold" color={theme.gray07} style={{ position: "absolute", left: 20, top: 16 }}>
            오늘 제주 날씨
          </Typo>
          {weatherCard.cloud}
          <Typo size={36} weight="bold" color={theme.gray07} style={{ position: "absolute", right: 20, bottom: 16 }}>
            27C
          </Typo>
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
          onClick={() => router.push("/orem-history")}
        />
        <BigCard
          title="오름 추천 받기"
          subTitle="여행 날짜에 맞는 오름을 추천드려요"
          icon={{ color: "#D5C9BA", position: "left" }}
        />
        <BigCard title="내 오름과 식물 친구 만들기" icon={{ color: "#90A68D", position: "right", hasFace: true }} />
      </CardContainer>
      <Typo size={16} weight="regular" color={theme.gray05} style={{ textAlign: "center", marginTop: "36px" }}>
        소중한 제주의 자연을 지켜요
      </Typo>
    </Container>
  );
}

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
  > svg {
    width: 100%;
    height: 100%;
  }
`;
