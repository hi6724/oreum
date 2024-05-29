"use client";
import { scrapOremList } from "@/api";
import { seasonalOrem } from "@/assets/icon";
import Button from "@/components/common/Button";
import Splash from "@/components/common/LoadingPage";
import Typo from "@/components/common/Typo";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import styled from "styled-components";

const seasonIcon: Record<string, JSX.Element> = {
  봄: seasonalOrem.spring,
  여름: seasonalOrem.summer,
  가을: seasonalOrem.autumn,
  겨울: seasonalOrem.winter,
};

function OremHistory() {
  return (
    <Suspense fallback={<Splash />}>
      <OremHistoryComponent />
    </Suspense>
  );
}

export default OremHistory;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 24px;
  gap: 10px;
`;

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

function OremHistoryComponent() {
  const router = useRouter();
  const data = typeof window !== "undefined" ? (localStorage.getItem("orem-list") as string) : "[]";
  const oremList = JSON.parse(data ?? "[]");

  return (
    <Container>
      <Typo size={30} weight="bold">
        내가 다녀온 오름
      </Typo>
      {oremList?.length > 0 ? (
        <Typo size={20} weight="regular" color="#646464" style={{ marginBottom: "15px" }}>
          지금까지{" "}
          <Typo tag="span" color="#34582e" size={20} weight="bold">
            {oremList?.length ?? 0}
          </Typo>
          개의 오름에 방문하셨네요!
        </Typo>
      ) : (
        <Typo size={20} weight="regular" color="#646464" style={{ marginBottom: "15px" }}>
          내가 방문한 오름을 저장할 수 있어요
        </Typo>
      )}
      {oremList?.length ? (
        <OremHistoryCardListContainer>
          {oremList?.reverse()?.map((orem: any, i: number) => (
            <OremHistoryCardContainer key={i} onClick={() => router.push(`/orem/${orem.id}`)}>
              {seasonIcon[orem.season]}
              <Typo weight="semi-bold" size={16} color="gray07">
                {orem.name}
              </Typo>
            </OremHistoryCardContainer>
          ))}
        </OremHistoryCardListContainer>
      ) : (
        <OremNotFound />
      )}

      <div
        style={{ position: "fixed", bottom: 44, left: 0, padding: "0 24px", width: "100%" }}
        onClick={() => router.push("/season-recommendations-input")}
      >
        <Button style={{ cursor: "pointer" }}>
          {(oremList?.length ?? 0) > 0 ? "오름 더 추천받기" : "첫 오름 추천받기"}
        </Button>
      </div>
    </Container>
  );
}
