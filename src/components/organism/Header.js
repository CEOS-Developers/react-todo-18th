import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import TextInput from "../molecules/TextInput";
import { Span } from "../atoms/Span";

function Header({}) {
  return (
    <StyledHeader>
      <TextInput />
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
