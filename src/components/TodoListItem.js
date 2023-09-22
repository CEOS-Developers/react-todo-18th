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

  padding: 0.1875em 0;
  transition: color 0.3s;
  color: #000;
  font-family: "SUITE-Regular";
  font-size: 0.75em;
  cursor: pointer;
`;

const TodoText = styled.span`
  width: 100%;
  max-width: 100%;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const IsDoneBox = styled.img`
  width: 1.25em;
  height: 1.25em;
  padding-right: 1em;
  border: none;
  border-radius: 0.3125em;
  background-color: transparent;
  cursor: pointer;
`;

const TodoDel = styled.img`
  width: 1.25em;
  height: 1.25em;
  padding: 0;
  border: none;
  border-radius: 0.3125em;
  background-color: transparent;
  cursor: pointer;
`;
