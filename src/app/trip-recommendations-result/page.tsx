"use client";

import styled from "styled-components";
import Button from "@/components/common/Button";
import Link from "next/link";

const tags = ["신비로운", "아름다운", "운신비로운신비로운"];

export default function Page() {
  return (
    <Container>
      <div>
        <TextBox>
          <Desc>5월 23일엔 이 오름을 추천해요</Desc>
          <Title>물영아리오름</Title>
        </TextBox>
        <ImageBox>
          <img
            src="https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/729e9473-9590-4923-aec0-e72a3fe7d18d.jpg"
            alt="오름 이미지"
          />
          <div>
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.49022 16.8625C10.4989 14.1881 13.8266 9.36424 13.8266 6.75826C13.8266 3.02577 10.7703 0 7.00011 0C3.22992 0 0.173584 3.02577 0.173584 6.75826C0.173584 9.36424 3.50131 14.1881 5.50999 16.8625C6.26535 17.8682 7.73486 17.8682 8.49022 16.8625ZM6.99993 10.8086C9.1992 10.8086 10.9821 9.02578 10.9821 6.8265C10.9821 4.62723 9.1992 2.84437 6.99993 2.84437C4.80066 2.84437 3.01779 4.62723 3.01779 6.8265C3.01779 9.02578 4.80066 10.8086 6.99993 10.8086Z"
                fill="white"
              />
            </svg>
            <Link href="http://place.map.kakao.com/10599658" target="_blank">
              위치 보기
            </Link>
          </div>
        </ImageBox>
        <TagBox>
          {tags.map((tag) => (
            <Tag key={tag}>#{tag}</Tag>
          ))}
        </TagBox>
        <OremDesc>
          물영아리 오름은 정말 멋있는 오름이에요. 물영아리 오름은 정말 멋있는 오름이에요. 정말 멋있어요. 네.
        </OremDesc>
      </div>
      <ButtonBox>
        <Button>다녀온 오름 저장하기</Button>
        <Button variant="outlined">
          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.38281 14.3281C5.00781 14.3281 4.6875 14.1615 4.42188 13.8281L0.375 8.76562C0.276042 8.64583 0.203125 8.52865 0.15625 8.41406C0.114583 8.29948 0.09375 8.18229 0.09375 8.0625C0.09375 7.79167 0.182292 7.56771 0.359375 7.39062C0.541667 7.21354 0.770833 7.125 1.04688 7.125C1.36458 7.125 1.63281 7.26823 1.85156 7.55469L5.35156 12.0469L12.1328 1.27344C12.2526 1.09115 12.375 0.963542 12.5 0.890625C12.625 0.8125 12.7865 0.773438 12.9844 0.773438C13.2552 0.773438 13.4766 0.859375 13.6484 1.03125C13.8203 1.19792 13.9062 1.41667 13.9062 1.6875C13.9062 1.79688 13.888 1.90885 13.8516 2.02344C13.8151 2.13281 13.7578 2.25 13.6797 2.375L6.33594 13.8203C6.10677 14.1589 5.78906 14.3281 5.38281 14.3281Z"
              fill="#292929"
            />
          </svg>
          다녀왔어요
        </Button>
      </ButtonBox>
      <BigCircle />
    </Container>
  );
}

const Container = styled("div")`
  padding: 0 24px;
`;

const TextBox = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 9px;
  margin-bottom: 39px;
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
  gap: 14px;
  margin-bottom: 22px;
`;

const Tag = styled("div")`
  padding: 4px 16px;
  border-radius: 40px;
  background-color: #f5efe8;
  font-size: 14px;
  line-height: 140%;
`;

const OremDesc = styled("p")`
  font-size: 16px;
  line-height: 130%;
  color: #414141;
`;

const ButtonBox = styled("div")`
  width: 100%;
  margin-top: 77px;
`;

const BigCircle = styled("div")`
  width: 1112px;
  height: 1112px;
  background-color: #d5c9ba;
  border-radius: 9999px;
  position: fixed;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`;
