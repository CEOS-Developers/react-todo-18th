import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";

function TodoContent({ todos }) {
  return (
    <TodoHeadBlock>
      <ul className="TodoList">
        {todos.map((todo) => (
          <TodoListItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </TodoHeadBlock>
  );
}

export default TodoContent;

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;

  border-bottom: 1px solid #e9ecef;
`;
