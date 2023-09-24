import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

import TodoTopbar from "./components/TodoTopbar";
import TodoListItem from "./components/TodoListItem";

function TodoTemplate() {
  //todo
  const initialTodoData = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];

  const [list, setList] = useState(initialTodoData);
  const [value, setValue] = useState("");

  const deleteTodo = (id) => {
    let deletedTodo = list.filter((data) => data.id !== id);
    setList(deletedTodo);
    localStorage.setItem("list", JSON.stringify(deletedTodo));
  };

  const toggleTodo = (id) => {
    let toggledTodo = list.map((data) =>
      data.id === id ? { ...data, completed: !data.completed } : data
    );
    setList(toggledTodo);
    localStorage.setItem("list", JSON.stringify(toggledTodo));
  };

  return (
    <>
      <GlobalStyle />
      <TodoTopbar
        list={list}
        value={value}
        setList={setList}
        setValue={setValue}
      />
      <TodoContainer>
        <article>
          <h3 class="list-title">TODO</h3>
          <div class="todo-list">
            {list.map((data) =>
              data.completed ? (
                <></>
              ) : (
                <TodoListItem
                  key={data.id}
                  todo={data}
                  deleteTodo={deleteTodo}
                  toggleTodo={toggleTodo}
                />
              )
            )}
          </div>
        </article>
        <article>
          <h3 class="list-title">DONE</h3>
          <div class="done-list">
            {list.map((data) =>
              data.completed ? (
                <TodoListItem
                  key={data.id}
                  todo={data}
                  deleteTodo={deleteTodo}
                  toggleTodo={toggleTodo}
                />
              ) : (
                <></>
              )
            )}
          </div>
        </article>
      </TodoContainer>
    </>
  );
}

export default TodoTemplate;

const TodoContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;

  min-height: 18.75em;
  max-width: 60%;

  border-radius: 2.125em;
  border: 0.1875em solid #7adb84;
  padding: 0.3125em 0.625em;
  margin: 0.625em auto;

  position: relative;

  .list-title {
    margin: 0.625em 0 0.625em 0.3125em;
    font-family: "Pretendard-Regular";
    color: #00c013;
  }

  .todo-list,
  .done-list {
    list-style: none;
    margin: 0 0 0.625em;
    padding: 0 1.875em 0 0.625em;

    max-height: 18em;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: #7adb84;
      border-radius: 1.875em;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }
`;
