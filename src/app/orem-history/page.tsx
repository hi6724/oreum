"use client";
import { seasonalOrem } from "@/assets/icon";
import Button from "@/components/common/Button";
import Typo from "@/components/common/Typo";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const DATA = [
  {
    title: "새별오름",
    season: "spring",
  },
  {
    title: "물영아리오름",
    season: "summer",
  },
  {
    title: "구름오름",
    season: "autumn",
  },
  {
    title: "카카오오름",
    season: "winter",
  },
];
const DATA2 = [];

function OremHistory() {
  const router = useRouter();
  return (
    <Container>
      <Typo size={30} weight="bold">
        내가 다녀온 오름
      </Typo>
      {DATA.length > 0 ? (
        <Typo size={20} weight="regular" color="#646464" style={{ marginBottom: "15px" }}>
          지금까지{" "}
          <Typo tag="span" color="#34582e" size={20} weight="bold">
            {DATA.length}
          </Typo>
          개의 오름에 방문하셨네요!
        </Typo>
      ) : (
        <Typo size={20} weight="regular" color="#646464" style={{ marginBottom: "15px" }}>
          내가 방문한 오름을 저장할 수 있어요
        </Typo>
      )}
      {DATA.length > 0 ? <OremHistoryList /> : <OremNotFound />}
      <div
        style={{ position: "fixed", bottom: 44, left: 0, padding: "0 24px", width: "100%" }}
        onClick={() => router.push("/season-recommendations-input")}
      >
        <Button style={{ cursor: "pointer" }}>{DATA.length > 0 ? "오름 더 추천받기" : "첫 오름 추천받기"}</Button>
      </div>
    </Container>
  );
}

export default OremHistory;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 24px;
  gap: 10px;
`;

function OremHistoryList() {
  // todo: react-query
  return (
    <OremHistoryCardListContainer>
      {DATA.map((orem, i) => (
        <OremHistoryCardContainer key={i}>
          {seasonalOrem[orem.season as keyof typeof seasonalOrem]}
          <Typo>{orem.title}</Typo>
        </OremHistoryCardContainer>
      ))}
    </OremHistoryCardListContainer>
  );
}

const OremHistoryCardListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;

const OremHistoryCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #e7e7e7;
  border-radius: 28px;
  aspect-ratio: 1;
`;

function OremNotFound() {
  return (
    <OremHistoryCardContainer style={{ height: 128 }}>
      {seasonalOrem.summer}
      <Typo>아직 다녀온 오름이 없어요!</Typo>
    </OremHistoryCardContainer>
  );
}
