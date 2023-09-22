import React from "react";
import Button from "../utils/Button";
import styled from "styled-components";
//todo Input 받는 부분

const InputForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
`;
const InputField = styled.input`
  flex-grow: 1;
  border: none;
  padding: 3px;
  outline: none;
  width: 150px;
  height: 40px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: #f0f0f0;
  margin-right: 20px;
`;
function TodoForm({ onSubmit, onChange, value }) {
  return (
    <InputForm>
      <form onSubmit={onSubmit}>
        <InputField
          autoFocus
          type="text"
          placeholder="📍Enter your to-do"
          onChange={onChange}
          value={value}
        />
      </form>
      <Button
        text={"Add to Do"}
        backgroundColor="#191D88"
        textColor="white"
        buttonSize="large"
      ></Button>
    </InputForm>
  );
}

export default TodoForm;
