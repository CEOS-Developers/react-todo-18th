import React from "react";
import styled from "styled-components";

import del from "../images/delete.png";

function TodoListItem() {
  return (
    <ListItem>
      <TodoText>testtest</TodoText>
      <TodoDel src={del} />
    </ListItem>
  );
}

export default TodoListItem;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 3px 0px;
  transition: color 0.3s;
  color: #000;
  font-family: "SUITE-Regular";
  font-size: 12px;
  cursor: pointer;

  &:hover {
    color: #4caf50;
  }
`;

const TodoText = styled.span`
  width: 100%;
  max-width: 100%;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TodoDel = styled.img`
  display: none;
  &:hover {
    display: flex;
    width: 20px;
    height: 20px;
    padding: 0;
    border: none;
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;
    transition: display 0.5s;
  }
`;
