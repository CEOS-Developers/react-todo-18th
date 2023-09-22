import React from "react";
import styled from "styled-components";

import del from "../images/delete.png";
import check from "../images/checkbox.png";
import done from "../images/donebox.png";

function TodoListItem({ todo, deleteTodo, toggleTodo }) {
  return (
    <ListItem>
      <IsDoneBox
        onClick={() => toggleTodo(todo.id)}
        src={todo.completed ? done : check}
      ></IsDoneBox>
      <TodoText onClick={() => toggleTodo(todo.id)}>{todo.title}</TodoText>
      <TodoDel src={del} onClick={() => deleteTodo(todo.id)} />
    </ListItem>
  );
}

export default TodoListItem;

const ListItem = styled.div`
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

const IsDoneBox = styled.img`
  width: 20px;
  height: 20px;
  padding-right: 1em;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
`;

const TodoDel = styled.img`
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    transition: display 0.5s;
  }
`;
