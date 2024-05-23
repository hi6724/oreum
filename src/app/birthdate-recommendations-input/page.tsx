"use client";

import styled from "styled-components";
import Button from "@/components/common/Button";
import Typo from "@/components/common/Typo";
import Picker from "react-mobile-picker";
import { useState } from "react";
import { useRouter } from "next/navigation";

const selections: Record<string, number[]> = {
  month: [...Array(12)].map((_, i) => i + 1),
  day: [...Array(31)].map((_, i) => i + 1),
};

const textMap: Record<string, string> = {
  month: "월",
  day: "일",
};

export default function Page() {
  const [pickerValue, setPickerValue] = useState({
    month: "",
    day: "",
  });

  const router = useRouter();
  const handleRecommendOrem = () => {
    router.push(`/birthdate-recommendations-result?month=${pickerValue.month}&day=${pickerValue.day}`);
  };

  return (
    <Container>
      <TextBox>
        <Typo weight="bold" size={30}>
          생일을 알려주세요
        </Typo>
        <Typo size={20} color="#646464">
          나의 오름과 제주 식물 친구를 만들어줘요
        </Typo>
      </TextBox>
      <Picker
        value={pickerValue}
        onChange={setPickerValue}
        style={{
          width: "100%",
        }}
      >
        {Object.keys(selections).map((name) => {
          return (
            <Picker.Column key={name} name={name}>
              {selections[name].map((option) => (
                <Picker.Item key={option} value={option.toString()}>
                  <Typo weight="bold">
                    {option}
                    {textMap[name]}
                  </Typo>
                </Picker.Item>
              ))}
            </Picker.Column>
          );
        })}
      </Picker>
      <ButtonBox>
        <Button disabled={!pickerValue.month || !pickerValue.day} onClick={handleRecommendOrem}>
          나의 오름 만들기
        </Button>
      </ButtonBox>
      <BigCircle />
    </Container>
  );
}

const Container = styled("div")`
  width: 100%;
  height: 100%;
  padding: 40px 24px 44px 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextBox = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 9px;
  margin-bottom: 48px;
`;

const ButtonBox = styled("div")`
  width: 100%;
`;

const BigCircle = styled("div")`
  width: 1112px;
  height: 1112px;
  background-color: #90a68d;
  border-radius: 9999px;
  position: fixed;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`;
