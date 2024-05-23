"use client";

import styled from "styled-components";
import Button from "@/components/common/Button";
import Typo from "@/components/common/Typo";
import { seasonalOrem } from "@/assets/icon";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [selectedSeason, setSelectedSeason] = useState<string>();

  const router = useRouter();
  const handleRecommendOrem = () => {
    if (!selectedSeason) return;

    router.push(`/season-recommendations-result?season=${selectedSeason}`);
  };

  return (
    <Container>
      <TextBox>
        <Typo weight="bold" size={30}>
          어느 계절에
          <br />
          제주로 가시나요?
        </Typo>
        <Typo size={20} color="#646464">
          선택한 계절에 어울리는
          <br />
          오름을 추천해줘요
        </Typo>
      </TextBox>
      <SeasonList>
        {seasonList.map((season) => {
          const isSelected = season.text === selectedSeason;

          return (
            <SeasonItem
              key={season.text}
              $isSelected={isSelected}
              onClick={() => {
                setSelectedSeason(season.text);
              }}
            >
              {season.icon}
              <Typo>{season.text}</Typo>
            </SeasonItem>
          );
        })}
      </SeasonList>
      <ButtonBox>
        <Button disabled={!selectedSeason} onClick={handleRecommendOrem}>
          오름 추천 받기
        </Button>
      </ButtonBox>
      <BigCircle />
    </Container>
  );
}

const seasonList = [
  {
    text: "봄",
    icon: seasonalOrem.spring,
  },
  {
    text: "여름",
    icon: seasonalOrem.summer,
  },
  {
    text: "가을",
    icon: seasonalOrem.autumn,
  },
  {
    text: "겨울",
    icon: seasonalOrem.winter,
  },
];

const Container = styled("div")`
  padding: 120px 24px 44px 24px;
`;

const TextBox = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 9px;
`;

const SeasonList = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  margin-top: 95px;
`;

type SeasonItemProps = {
  $isSelected: boolean;
};
const SeasonItem = styled("button")<SeasonItemProps>`
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  text-align: inherit;
  font: inherit;
  border-radius: 0;
  appearance: none; // Just in case we missed anything.

  width: 160px;
  height: 160px;
  flex-shrink: 0;
  border-radius: 28px;
  background-color: ${({ $isSelected }) => ($isSelected ? "#fff" : "#f0e9df")};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 12px;
`;

const ButtonBox = styled("div")`
  width: 100%;
  margin-top: 44px;
`;

const BigCircle = styled("div")`
  width: 1112px;
  height: 1112px;
  background-color: #e2dacf;
  border-radius: 9999px;
  position: fixed;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`;
