"use client";

import styled from "styled-components";
import { Card } from "../../components/main/Card";
import { BigCard } from "../../components/main/BigCard";

export default function Home() {
  return (
    <Container>
      <h1>
        무슨 문구를 <br />
        써줘야 할까요
      </h1>

      <CardContainer>
        <Card
          title={`오늘 제주 날씨`}
          bg="#c7c7c7"
          icon={
            <div style={{ width: "100%", display: "flex", justifyContent: "end", position: "relative" }}>
              <h1
                style={{
                  position: "absolute",
                  right: 32,
                  bottom: "calc(50% - 5px)",
                  transform: "translateY(50%)",
                  fontSize: "30px",
                }}
              >
                27C
              </h1>
              <svg width="120" height="111" viewBox="0 0 120 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="71" cy="71" r="71" fill="#FFDC99" />
              </svg>
            </div>
          }
        />
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
          onClick={() => alert("오름리스트페이지")}
        />
        <BigCard
          title="오름 추천 받기"
          subTitle="여행 날짜에 맞는 오름을 추천드려요"
          icon={{ color: "#D5C9BA", position: "left" }}
        />
        <BigCard title="내 오름과 식물 친구 만들기" icon={{ color: "#90A68D", position: "right", hasFace: true }} />
      </CardContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 64px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  > h1 {
    font-size: 36px;
    line-height: 140%;
    font-weight: bold;
    margin-bottom: 16px;
  }
`;
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

const Sun = styled.div`
  background-color: #e59256;
  border-radius: 100%;
  width: 125px;
  height: 125px;
  position: absolute;
  bottom: -24px;
  right: -24px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: #000;
    font-size: 36px;
    font-weight: 700;
    line-height: 140%;
  }
`;
