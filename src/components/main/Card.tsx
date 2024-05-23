import styled, { useTheme } from "styled-components";
import Typo from "../common/Typo";

export function Card({ title, icon, onClick, bg }: { title: string; onClick?: () => void; icon: any; bg: string }) {
  const theme = useTheme();
  return (
    <Container bg={bg} onClick={onClick} cursor={!!onClick}>
      <Typo size={20} weight="bold" color={theme.gray07} style={{ padding: "16px 20px", whiteSpace: "break-spaces" }}>
        {title}
      </Typo>
      <SvgContainer>
        {icon}
        {onClick ? (
          <ArrowSvg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
            <path d="M0.351196 16.0541H31.0541" stroke="white" stroke-width="2" />
            <path d="M18.9346 3.93448L31.0541 16.054L18.9346 28.1736" stroke="white" stroke-width="2" />
          </ArrowSvg>
        ) : null}
      </SvgContainer>
    </Container>
  );
}

const Container = styled.div<{ bg: string; cursor: boolean }>`
  flex: 1;
  aspect-ratio: 1;
  border-radius: 28px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ bg }) => bg};
  cursor: ${({ cursor }) => (cursor ? "pointer" : "default")};
`;
const SvgContainer = styled.div`
  position: relative;
  width: 100%;
  bottom: 0;
  left: 0;
  display: flex;
`;

const ArrowSvg = styled.svg`
  bottom: 16px;
  right: 24px;
  position: absolute;
`;
