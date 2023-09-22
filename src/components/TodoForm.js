import React from "react";
import Button from "../utils/Button";
import styled from "styled-components";
//todo Input 받는 부분

const InputForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
`;
const InputField = styled.input`
  flex-grow: 1;
  border: none;
  padding: 0.3rem;
  outline: none;
  width: 15rem;
  height: 4rem;
  font-size: 1.5rem;
  border: 0;
  border-radius: 1.5rem;
  outline: none;
  padding-left: 1rem;
  background-color: #f0f0f0;
  margin-right: 2rem;
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
        text={"Add"}
        backgroundColor="#191D88"
        textColor="white"
        buttonSize="large"
      ></Button>
    </InputForm>
  );
}

export default TodoForm;
