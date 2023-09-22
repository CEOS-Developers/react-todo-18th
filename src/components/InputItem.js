import React from "react";
import styled from "styled-components";
import { useState, useCallback } from "react";

const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  background-color: #e0e0e0;
  border-radius: 10px;
  padding: 5px;
  height: 10%;
  box-sizing: border-box;
  border: 0.5px solid #736e6e;
`;

const InputField = styled.input`
  width: 90%;
  padding: 3px;
  border: none;
  border-bottom: 1px solid #555252;
  background-color: transparent;
  color: #555252;
  font-family: "Pretendard-Regular";
  margin-left: 3px;
  box-sizing: border-box;
  &:focus {
    outline-style: none;
  }
`;

const AddButton = styled.button`
  margin-top: 3px;
  width: 20px;
  height: 30px;
  background-color: transparent;
  color: #555252;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

export default function TodoInput({ createTodo }) {
  const [value, setValue] = useState("");

  const onChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [value]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      //입력한 값이 없을 때 alert 추가
      if (value.trim() == "") {
        alert("할일을 입력해주세요.");
      } else {
        createTodo(value);
        setValue("");
      }
    },
    [value]
  );

  return (
    <Container onSubmit={onSubmit}>
      <InputField
        onChange={onChange}
        value={value}
        placeholder="할 일을 입력하세요"
      />
      <AddButton type="submit">+</AddButton>
    </Container>
  );
}
