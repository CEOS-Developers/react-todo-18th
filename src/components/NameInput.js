import React, { useState } from "react";
import Button from "../utils/Button";
import styled from "styled-components";

const InputForm = styled.li`
  display: flex;
  justify-content: space-around;
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
  height: 32px;
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
        <label>
          <InputField
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <Button text="Submit" backgroundColor="#088395" textColor="white" />
      </form>
    </InputForm>
  );
}

export default NameInput;
