import React, { useState } from 'react';
import styled from 'styled-components';

const AddButton = styled.button`
  width: 90px;
  padding: 13px;
  margin-left: 25px;
  border: none;
  background-color: #000000;
  color: #fff;
  border-radius: 5px;
  line-height: 18px;

  &:hover {
    background-color: #FF2D00;
  }
`;

const TodoInput = styled.input`
  width: 240px;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 18px;
  line-height: 18px;

  &:focus {
    border-color: #007bff;
  }
`;

const TodoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

function InputTodo({ addTodo }) {
  const [input, setInput] = useState('');

  const addTodoTrim = () => {
    if (input.trim().length > 0) {
      addTodo(input.trim());
      setInput('');
    }
  };

  const enterKey = (e) => {
    if (e.key === 'Enter') {
      addTodoTrim();
    }
  };

  return (
    <TodoContainer>
      <TodoInput 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={enterKey} 
      />
      <AddButton onClick={addTodoTrim}>Add</AddButton>
    </TodoContainer>
  );
}

export default InputTodo;
