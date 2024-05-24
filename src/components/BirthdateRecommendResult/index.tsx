"use client";

import styled from "styled-components";
import Button from "@/components/common/Button";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getOremByBirthdate } from "@/api";
import Typo from "@/components/common/Typo";
import { OremPlant } from "@/assets/icon";
import { toPng } from "html-to-image";
import { useRef } from "react";
import Splash from "../common/LoadingPage";
import { josa } from "@toss/hangul";
import axios from "axios";

function dataURLtoFile(dataurl: any, filename: any) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[arr.length - 1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

export default function BirthdateRecommendResult() {
  const router = useSearchParams();
  const month = router.get("month") as string;
  const day = router.get("day") as string;

  const seasonTextByMonth = (() => {
    if (!month) return;

    const numMonth = Number(month);

    if (numMonth >= 3 && numMonth <= 5) {
      return "봄";
    }

    if (numMonth >= 6 && numMonth <= 8) {
      return "여름";
    }

    if (numMonth >= 9 && numMonth <= 11) {
      return "가을";
    }

    return "겨울";
  })();

  const { data: oremResponse } = useQuery({
    queryKey: ["birthdate", month, day],
    queryFn: () => getOremByBirthdate(Number(month), Number(day)),
    enabled: Boolean(month && day),
    select: (res) => res.data.data,
  });

  const handleKakaotalkShare = () => {
    const { Kakao } = window;

    const url = `${location.origin}/birthdate-recommendations-input`;

    const box = resultRef.current;

    if (!box) return;

    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "어떵오름",
        description: "내 오름과 식물 친구 만들기",
        imageUrl: oremResponse?.plantResponse.imageUrl ?? "", // TODO
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: "나도 해보기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });

    // toPng(box, { cacheBust: false })
    //   .then((dataUrl) => {
    //     const file = dataURLtoFile(dataUrl, "orem.png");
    //     const formData = new FormData();
    //     formData.append("file", file);
    //     axios.post(`/api/save-file`, formData, { headers: { "Content-Type": "multipart/form-data" } }).then((res) => {
    //       Kakao.Share.sendDefault({
    //         objectType: "feed",
    //         content: {
    //           title: "나의 오름",
    //           description: "나의 오름은 무엇일까요?",
    //           imageUrl: `${location.origin}/uploads/${res.data.path}`,
    //           link: {
    //             // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
    //             mobileWebUrl: url,
    //             webUrl: url,
    //           },
    //         },
    //         buttons: [
    //           {
    //             title: "나의 오름 만들기",
    //             link: {
    //               mobileWebUrl: url,
    //               webUrl: url,
    //             },
    //           },
    //         ],
    //       });
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const resultRef = useRef<HTMLDivElement>(null);
  const handleDownload = () => {
    const box = resultRef.current;

    if (!box) return;

    toPng(box, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "나의오름.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return oremResponse ? (
    <Wrapper>
      <ResultBox ref={resultRef}>
        <OremPlant />
        <TextBox>
          <Typo size={20} color="green04">
            {month}월 {day}일, {seasonTextByMonth}
          </Typo>
          <Typo weight="bold" size={30} color="gray07">
            당신의 친구는{" "}
            <Typo color="bg" size={30} weight="bold" tag="span">
              {oremResponse?.adjective}
            </Typo>
            <br />
            <Typo color="bg" size={30} weight="bold" tag="span">
              {oremResponse?.plantResponse?.plantName}
            </Typo>
            {josa(oremResponse?.plantResponse?.plantName ?? "", "이/가").replace(
              oremResponse?.plantResponse?.plantName,
              "",
            )}{" "}
            자라나고
            <br />
            있는{" "}
            <Typo color="bg" size={30} weight="bold" tag="span">
              {oremResponse?.oremName}
            </Typo>
            {josa(oremResponse?.oremName ?? "", "이에요/예요").replace(oremResponse?.oremName, "")}
          </Typo>
        </TextBox>
      </ResultBox>

      <Container>
        <PlantBox>
          <img src={oremResponse?.plantResponse?.imageUrl} alt={`${oremResponse?.plantResponse?.plantName} 이미지`} />
          <div className="text-box">
            <Typo weight="bold" size={16} color="gray07">
              {oremResponse?.plantResponse?.plantName}
            </Typo>
            <Typo size={16} color="gray07">
              {oremResponse?.plantResponse?.description}
            </Typo>
          </div>
        </PlantBox>
        <ButtonBox>
          <KakaoButton onClick={handleKakaotalkShare}>
            <svg width="23px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#000000"
                d="M255.5 48C299.345 48 339.897 56.5332 377.156 73.5996C414.415 90.666 443.871 113.873 465.522 143.22C487.174 172.566 498 204.577 498 239.252C498 273.926 487.174 305.982 465.522 335.42C443.871 364.857 414.46 388.109 377.291 405.175C340.122 422.241 299.525 430.775 255.5 430.775C241.607 430.775 227.262 429.781 212.467 427.795C148.233 472.402 114.042 494.977 109.892 495.518C107.907 496.241 106.012 496.15 104.208 495.248C103.486 494.706 102.945 493.983 102.584 493.08C102.223 492.177 102.043 491.365 102.043 490.642V489.559C103.126 482.515 111.335 453.169 126.672 401.518C91.8486 384.181 64.1974 361.2 43.7185 332.575C23.2395 303.951 13 272.843 13 239.252C13 204.577 23.8259 172.566 45.4777 143.22C67.1295 113.873 96.5849 90.666 133.844 73.5996C171.103 56.5332 211.655 48 255.5 48Z"
              ></path>
            </svg>
          </KakaoButton>
          <Button onClick={handleDownload}>사진으로 저장하기</Button>
        </ButtonBox>
      </Container>
    </Wrapper>
  ) : (
    <Splash />
  );
}

const Wrapper = styled("div")`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: end;
`;

const Container = styled("div")`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.green01};
  margin-top: -1px;
  padding: 22px 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ResultBox = styled("div")`
  width: 100%;
  height: 390px;
  padding-top: 68px;

  display: flex;
  flex-direction: column;
  align-items: end;

  background-color: ${({ theme }) => theme.bg};
`;

const TextBox = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 9px;
  background-color: ${({ theme }) => theme.green01};
  margin-top: -1px;
  padding: 30px 24px;
`;

const PlantBox = styled("div")`
  width: 100%;
  border-radius: 28px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }

  .text-box {
    background-color: #fff;
    padding: 16px 18px;

    .title {
      color: #414141;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%; /* 20.8px */
      letter-spacing: -0.408px;
      margin-bottom: 11px;
    }

    .desc {
      color: #414141;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 130%; /* 20.8px */
      letter-spacing: -0.408px;
    }
  }
`;

const ButtonBox = styled("div")`
  width: 100%;
  margin-top: 77px;
  display: flex;
  column-gap: 14px;
`;

const KakaoButton = styled(Button)`
  border-radius: 9999px;
  width: 60px;
  height: 60px;
  background-color: #fee500;
  flex-shrink: 0;
`;
