import React, { useEffect } from "react";
import { useState } from "react";
import { styled } from "styled-components";
import { ImageButton } from "../atoms/ImageButton";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import logo from "../../image/galaxy-icon.svg";
import { useRecoilState } from "recoil";
import { nowTodoList } from "../../recoil/atom.ts";

function TextInput() {
  const [input, setInput] = useState("");
  const [nowTodo, setnowTodoList] = useRecoilState(nowTodoList);
  const onChange = (e) => {
    setInput(e.target.value);
  };
  const buttonClick = () => {
    if (input.length < 5 || input.length > 30) {
      alert("할 일은 5자 이상 30자 이하로 작성해주세요.");
      return;
    }
    setnowTodoList([...nowTodo, input]);
    setInput("");
  };
  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      if (input.length < 5 || input.length > 30) {
        alert("할 일은 5자 이상 30자 이하로 작성해주세요.");
        return;
      }
      setnowTodoList([...nowTodo, input]);
      setInput("");
    }
  };

  return (
    <StyledInput>
      <ImageButton src={logo} alt="로고" />
      <Input
        type="text"
        placeholder="할 일을 입력하세요."
        value={input}
        onChange={onChange}
        onKeyPress={handleOnKeyPress}
      />
      <Button onClick={buttonClick}>Submit</Button>
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
