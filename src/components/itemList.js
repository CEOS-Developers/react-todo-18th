import React from "react";
import styled from 'styled-components';

const DeleteButton = styled.button`
  background-color: #FFB6C1;
  color: white;
  border: none;
  box-sizing: border-box;
  padding: 6px 5px;
  width: 60px;
  font-size: 14px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(255, 182, 193, 0.2);
  margin-right: 5px;

  &:hover {
    background-color: #FF69B4;
    box-shadow: 0 4px 10px rgba(255, 105, 180, 0.4);
  }

  &:active {
    box-shadow: 0 4px 10px rgba(255, 105, 180, 0.2);
  }
`;

const TodoItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin: 8px 0;
  cursor: pointer;
`;

const TodoText = styled.span`
  flex-grow: 1;
  margin-right: 10px;
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
