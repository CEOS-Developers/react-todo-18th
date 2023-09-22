import React, { useState } from 'react';
import styled from 'styled-components';

const AddButton = styled.button`
  width: 9rem;
  padding: 1.3rem;
  margin-left: 2.5rem;
  border: none;
  background-color: #000000;
  color: #fff;
  border-radius: 0.5rem;
  line-height: 1.8rem;

  &:hover {
    background-color: #FF2D00;
  }
`;

const TodoInput = styled.input`
  width: 24rem;
  padding: 1rem;
  border: 0.2rem solid #ddd;
  border-radius: 0.5rem;
  font-size: 1.8rem;
  line-height: 1.8rem;

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
