import React from "react";
import styled from 'styled-components';

const DeleteButton = styled.button`
  background-color: #FFB6C1;
  color: white;
  border: none;
  box-sizing: border-box;
  padding: 0.6rem 0.5rem;
  width: 6rem;
  font-size: 1.4rem;
  border-radius: 2rem;
  box-shadow: 0 0.4rem 1rem rgba(255, 182, 193, 0.2);
  margin-right: 0.5rem;

  &:hover {
    background-color: #FF69B4;
    box-shadow: 0 0.4rem 1rem rgba(255, 105, 180, 0.4);
  }

  &:active {
    box-shadow: 0 0.4rem 1rem rgba(255, 105, 180, 0.2);
  }
`;

const TodoItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  margin: 0.8rem 0;
  cursor: pointer;
`;

const TodoText = styled.span`
  flex-grow: 1;
  margin-right: 1rem;
  font-size : 1.6rem;
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
`;

function ItemList({ item, index, switchList, deleteItem }) {
  return (
    <TodoItemContainer onClick={switchList}>
      <TodoText>{item}</TodoText>
      <ActionsContainer>
        <DeleteButton onClick={(e) => { e.stopPropagation(); deleteItem(); }}>x</DeleteButton>
      </ActionsContainer>
    </TodoItemContainer>
  );
}

export default ItemList;
