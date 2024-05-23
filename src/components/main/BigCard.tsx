import React from "react";
import styled from "styled-components";

export function BigCard({
  title,
  subTitle,
  icon,
  ...rest
}: {
  title: string;
  subTitle?: string;
  icon: { color: string; hasFace?: boolean; position: "left" | "right" };
}) {
  return (
    <Container>
      <h1>{title}</h1>
      {subTitle && <h2>{subTitle}</h2>}
      <SvgContainer>
        <SmileSvg
          hasFace={icon.hasFace}
          width="30"
          height="10"
          viewBox="0 0 30 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2.5" cy="2.5" r="2.5" fill="#606060" />
          <circle cx="27.5" cy="2.5" r="2.5" fill="#606060" />
          <path
            d="M17 5C17.5523 5 18.0101 5.45211 17.9003 5.99338C17.7065 6.94935 17.2355 7.83554 16.5355 8.53553C15.5979 9.47322 14.3261 10 13 10C11.6739 10 10.4021 9.47322 9.46447 8.53553C8.76447 7.83554 8.29346 6.94935 8.09965 5.99338C7.98992 5.45211 8.44772 5 9 5L13 5H17Z"
            fill="#606060"
          />
        </SmileSvg>

        <OremSvg
          position={icon.position}
          width="457"
          height="62"
          viewBox="0 0 457 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            style={{ transform: "translateX(1px)" }}
            d="M228.429 0C144.964 0 101.036 61.5 0 61.5H228.429V0Z"
            fill={icon.color}
          />
          <path d="M228.429 0C311.893 0 355.822 61.5 456.857 61.5H228.429V0Z" fill={icon.color} />
        </OremSvg>

        <ArrowSvg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
          <path d="M0.351196 16.0541H31.0541" stroke="#34582E" stroke-width="2" />
          <path d="M18.9346 3.93448L31.0541 16.054L18.9346 28.1736" stroke="#34582E" stroke-width="2" />
        </ArrowSvg>
      </SvgContainer>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  border-radius: 28px;
  background: #fff;
  position: relative;
  height: 142px;
  overflow: hidden;
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  h1 {
    color: #000;
    font-size: 24px;
    font-weight: 700;
    line-height: 140%; /* 33.6px */
    padding: 16px 20px 2px 20px;
  }
  h2 {
    padding: 0px 20px 2px 20px;
    color: #8b8b8b;
    font-size: 14px;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
  }
`;

const SvgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const OremSvg = styled.svg<{ position: "left" | "right" }>`
  position: absolute;
  bottom: 0;
  ${({ position }) => (position === "left" ? "right:-140px" : "left:-140px")};
`;

const SmileSvg = styled.svg<{ hasFace?: boolean }>`
  display: ${({ hasFace }) => (!hasFace ? "none" : "block")};
  position: absolute;
  z-index: 1;
  left: 60px;
  bottom: 30px;
`;

const ArrowSvg = styled.svg`
  position: absolute;
  bottom: 16px;
  right: 20px;
  transform: translateX(-50%);
`;
