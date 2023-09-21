import React, { useState } from "react";
import Button from "../utils/Button";
import styled from "styled-components";
//todo Input 받는 부분

const InputForm = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  // background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
`;
const InputField = styled.input`
  flex-grow: 1;
  border: none;
  padding: 8px;
  outline: none;
  width: 150px;
  height: 32px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
  margin-right: 20px;
`;
function TodoForm({ onSubmit, onChange, value }) {
  return (
    <InputForm>
      {" "}
      <form onSubmit={onSubmit}>
        <InputField
          autoFocus
          type="text"
          placeholder="📍Enter your to-do"
          onChange={onChange}
          value={value}
        />
        <Button
          text={"Add to Do"}
          backgroundColor="#191D88"
          textColor="white"
        ></Button>
      </form>
    </InputForm>
  );
}

export default TodoForm;
