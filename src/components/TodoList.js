import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";
//list 이동 관리

function TodoList({ items, moveBtn, deleteBtn, isDone }) {
  return (
    <div className="listContainer">
      <ul>
        {items.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            index={index}
            moveBtn={moveBtn}
            deleteBtn={deleteBtn}
            isDone={isDone}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
