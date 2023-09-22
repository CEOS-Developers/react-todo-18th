import React from "react";
import { styled } from "styled-components";
import { ImageButton } from "../atoms/ImageButton";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import logo from "../../image/galaxy-icon.svg";

function TextInput() {
  return (
    <StyledInput>
      <ImageButton src={logo} alt="로고" />
      <Input type="text" placeholder="할 일을 입력하세요." />
      <Button>Submit</Button>
    </StyledInput>
  );
}

const StyledInput = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 45%;
  border-radius: 20px;
  background-color: var(--white);
`;

export default TextInput;
