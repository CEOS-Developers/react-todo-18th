import React, { useState } from "react";
import Button from "../utils/Button";
import styled from "styled-components";

//name input 받는 부분

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

function NameInput({ onNameSubmit }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onNameSubmit(name);
  };

  return (
    <InputForm>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="✏️Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <Button
        text="Submit"
        backgroundColor="#088395"
        textColor="white"
        buttonSize="large"
      />
    </InputForm>
  );
}

export default NameInput;
