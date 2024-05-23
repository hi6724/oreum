"use client";

import styled from "styled-components";
import Navbar from "../../components/common/Navbar";
import Button from "../../components/common/Button";

export default function Page() {
  return (
    <div>
      <Navbar />
      <TextBox>
        <Title>여행 날짜를 알려주세요</Title>
        <Desc>그 날 가장 예쁜 오름을 추천해줘요</Desc>
      </TextBox>
      <ButtonBox>
        <Button>오름 추천 받기</Button>
      </ButtonBox>
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
