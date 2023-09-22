import React from "react";
import { styled } from "styled-components";
import TextInput from "../molecules/TextInput";
import { Span } from "../atoms/Span";

function Header() {
  return (
    <StyledHeader>
      <TextInput placeholder="할 일을 입력해주세요" />
      <Span>"Carl Seagan - 소멸은 법칙이다."</Span>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  height: 250px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 26px;
`;

export default Header;
