"use client";

import styled from "styled-components";
import Button from "@/components/common/Button";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <TextBox>
        <Title>생년월일을 알려주세요</Title>
        <Desc>나의 오름과 제주 식물 친구를 만들어줘요</Desc>
      </TextBox>
      <ButtonBox>
        <Link href="/birthdate-recommendations-result">
          <Button>나의 오름 만들기</Button>
        </Link>
      </ButtonBox>
      <BigCircle />
    </div>
  );
}

const TextBox = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 9px;
  padding: 0 24px;
`;

const Title = styled("h2")`
  font-size: 30px;
  font-weight: bold;
  line-height: 130%;
`;

const Desc = styled("p")`
  font-size: 20px;
  line-height: 130%;
  color: #646464;
`;

const ButtonBox = styled("div")`
  position: fixed;
  bottom: 24px;
  width: 100%;
  padding: 0 24px;
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
