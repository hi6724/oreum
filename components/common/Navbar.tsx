import styled from "styled-components";

export default function Navbar() {
  return (
    <Root>
      <PrevIcon>&lt;</PrevIcon>
    </Root>
  );
}

const Root = styled("div")`
  width: 100%;
  height: 40px;
`;

const PrevIcon = styled("span")`
  font-size: 24px;
`;
