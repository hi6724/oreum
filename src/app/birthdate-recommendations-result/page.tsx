"use client";

import styled from "styled-components";
import Button from "../../components/common/Button";
import KakaoScript from "../../components/KakaoScript";

export default function Page() {
  const handleKakaotalkShare = () => {
    const { Kakao } = window;

    const url = "http://172.30.1.86:3000/birthdate-recommendations-input";

    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "나의 오름",
        description: "나의 오름은 무엇일까요?",
        imageUrl: "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/68cf14f3-16e9-48c3-8ce6-6f878d82ba93.jpg",
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: "나의 오름 만들기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return (
    <>
      <KakaoScript />
      <Wrapper>
        <svg width="336" height="89" viewBox="0 0 336 89" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M202.429 34C128.464 34 89.5357 88.5 0 88.5H202.429V34Z" fill="#90A68D" />
          <path d="M202.429 34C276.393 34 315.322 88.5 404.857 88.5H202.429V34Z" fill="#90A68D" />
          <rect x="199" y="20" width="5" height="16" rx="2.5" fill="#546C51" />
          <path
            d="M174.5 48C176.167 50.6667 180.6 54.4 185 48"
            stroke="#292929"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M189 53C190.111 54.5092 193.067 56.6222 196 53"
            stroke="#292929"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M204 48C205.667 50.6667 210.1 54.4 214.5 48"
            stroke="#292929"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="201.738" cy="12.8333" r="10.2143" fill="#E59256" />
          <circle cx="202" cy="4.19048" r="4.19048" fill="#E59256" />
          <circle cx="195.19" cy="4.19048" r="4.19048" fill="#E59256" />
          <circle cx="208.81" cy="4.19048" r="4.19048" fill="#E59256" />
        </svg>

        <Container>
          <DateTypo>9월 9일, 가을</DateTypo>
          <RecommendTypo>
            당신은 <span className="white">신비로운 수선화</span>가<br />
            자라나고 있는
            <br />
            <span className="white">새별오름</span>
            이에요.
          </RecommendTypo>
          <PlantBox>
            <img src="https://www.jeju.go.kr/files/sumok/ecology/0200001416.01-72.jpg" alt="식물 이미지" />
            <div className="text-box">
              <p className="title">수선화</p>
              <p className="desc">
                수선화는 정말 신비로운 꽃 식물이에요. 너무나도 신비로워 신비로워 수선화 최고 완전 최고 냐냐냐냔냐.
              </p>
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
            <Button>공유/저장하기</Button>
          </ButtonBox>
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled("div")`
  width: 100%;
  height: 100%;
  padding-top: 25px;

  display: flex;
  flex-direction: column;
  align-items: end;
`;

const Container = styled("div")`
  width: 100%;
  min-height: calc(100% - 89px);
  background-color: #90a68d;
  margin-top: -1px;
  padding: 22px 24px;
`;

const DateTypo = styled("p")`
  color: #546c51;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.408px;
`;

const RecommendTypo = styled("p")`
  color: #000;
  font-feature-settings: "case" on;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.408px;

  .white {
    color: #f8f4ee;
  }

  margin-bottom: 77px;
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
