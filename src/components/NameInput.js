import React, { useState } from "react";
import Button from "../utils/Button";
import styled from "styled-components";

//name input 받는 부분

const InputForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
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
