"use client";

import styled from "styled-components";
import Button from "@/components/common/Button";
import Link from "next/link";
import Typo from "@/components/common/Typo";
import { seasonalOrem } from "@/assets/icon";
import { useSearchParams } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getOremBySeason, saveOrem, scrapOremList } from "@/api";
import Splash from "../common/LoadingPage";
import Image from "next/image";
import { useEffect, useState } from "react";
import KakaoLoginButton from "../KakaoLoginButton";

const seasonIcon: Record<string, JSX.Element> = {
  봄: seasonalOrem.spring,
  여름: seasonalOrem.summer,
  가을: seasonalOrem.autumn,
  겨울: seasonalOrem.winter,
};

export default function Page() {
  const router = useSearchParams();
  const season = router.get("season") as string;
  const [loading, setLoading] = useState(false);
  const {
    data: oremResponse,
    refetch,
    isFetching,
    isFetched,
  } = useQuery({
    queryKey: ["season", season],
    queryFn: () => getOremBySeason(season),
    enabled: !!season,
    select: (res) => res.data.data,
  });

  const uuid = typeof window !== "undefined" ? (localStorage.getItem("uuid") as string) : "";

  const { data: oremList, isFetched: isListFetched } = useQuery({
    queryKey: ["scrap-orem", uuid],
    queryFn: () => scrapOremList(uuid),
    enabled: !!uuid,
    select: (res) => res.data?.data,
  });

  const handleAgainRecommend = () => {
    setLoading(true);
    setTimeout(() => {
      refetch();
      setLoading(false);
    }, 500);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { mutate } = useMutation({
    mutationFn: saveOrem,
  });
  const handleSaveOrem = () => {
    const uuid = localStorage.getItem("uuid") as string;

    if (!oremResponse) return;

    if (uuid) {
      mutate(
        {
          oremId: oremResponse.id,
          uuid,
        },
        {
          onSuccess: (res) => {
            if (res.data?.data === "Success") {
              setIsSaved(true);
            }
          },
        },
      );
    } else {
      setIsModalOpen(true);
    }
  };
  useEffect(() => {
    if (!oremResponse || !oremList) return;

    setIsSaved(oremList.orems?.some((orem: any) => orem.oremId === oremResponse?.id));
  }, [oremResponse, oremList]);

  return isFetched || isListFetched ? (
    <>
      <Container>
        <div>
          <TextBox>
            <Typo size={20} color="#646464">
              {season}엔 이 오름을 추천해요
            </Typo>
            <OremNameBox>
              <Typo weight="bold" size={30}>
                {oremResponse?.name}
              </Typo>
              {seasonIcon[season]}
            </OremNameBox>
          </TextBox>
          <ImageBox>
            <img src={oremResponse?.imageUrl} alt={`${oremResponse?.name} 이미지`} />
            <div>
              <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.49022 16.8625C10.4989 14.1881 13.8266 9.36424 13.8266 6.75826C13.8266 3.02577 10.7703 0 7.00011 0C3.22992 0 0.173584 3.02577 0.173584 6.75826C0.173584 9.36424 3.50131 14.1881 5.50999 16.8625C6.26535 17.8682 7.73486 17.8682 8.49022 16.8625ZM6.99993 10.8086C9.1992 10.8086 10.9821 9.02578 10.9821 6.8265C10.9821 4.62723 9.1992 2.84437 6.99993 2.84437C4.80066 2.84437 3.01779 4.62723 3.01779 6.8265C3.01779 9.02578 4.80066 10.8086 6.99993 10.8086Z"
                  fill="white"
                />
              </svg>
              <Link href={oremResponse?.placeUrl ?? ""} target="_blank">
                위치 보기
              </Link>
            </div>
          </ImageBox>
          <TagBox>
            {oremResponse?.keywords.map((keyword) => (
              <Tag key={keyword}># {keyword}</Tag>
            ))}
          </TagBox>
          <Typo size={14}>{oremResponse?.description}</Typo>
        </div>
        <ButtonBox style={{ marginBottom: 44 }}>
          <Button color="brown" width={114} onClick={handleAgainRecommend}>
            다시 추천받기
          </Button>
          {isSaved ? (
            <Link href="orem-history">
              <Button variant="outlined">저장된 오름 보기</Button>
            </Link>
          ) : (
            <Button onClick={handleSaveOrem}>다녀온 오름에 저장하기</Button>
          )}
        </ButtonBox>
        <BigCircle />

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

            <div>
              <Typo size={20} weight="bold" color="gray07" style={{ marginBottom: 16, textAlign: "center" }}>
                로그인이 필요한 기능이에요
              </Typo>
              <Typo size={14} weight="regular" color="gray04" style={{ textAlign: "center" }}>
                로그인 한 뒤 다녀온 오름을 저장할 수 있어요
              </Typo>
            </div>
            <KakaoLoginButton />
          </Modal>
        </ModalWrapper>
      </Container>
      {(loading || isFetching) && <Splash />}
    </>
  ) : (
    <Splash />
  );
}

const Container = styled("div")`
  min-height: 100%;
  padding: 40px 24px 0px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextBox = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-bottom: 40px;
`;

const OremNameBox = styled("div")`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const ImageBox = styled("div")`
  width: 100%;
  height: 342px;
  border-radius: 28px;
  position: relative;
  overflow: hidden;
  margin-bottom: 14px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  div {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 22px 27px;
    display: flex;
    align-items: center;
    column-gap: 5px;

    a {
      color: #fff;
    }
  }
`;

const TagBox = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 25px;
`;

const Tag = styled("div")`
  padding: 4px 16px;
  border-radius: 40px;
  background-color: #fff;
  font-size: 14px;
  line-height: 140%;
`;

const ButtonBox = styled("div")`
  width: 100%;
  margin-top: 64px;
  display: flex;
  column-gap: 6px;

  a {
    width: 100%;
  }

  button:first-child {
    flex-shrink: 0;
  }
`;

const BigCircle = styled("div")`
  width: 1112px;
  height: 1112px;
  background-color: #e2dacf;
  border-radius: 9999px;
  position: fixed;
  top: 28%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`;

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
