"use client";

import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <p>hello world</p>
      <h1>haskdlalsjkjasldkj</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.green};
`;
