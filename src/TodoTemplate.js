import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

import TodoListItem from "./components/TodoListItem";

//img
import plus from "./images/plus.png";
import input from "./images/input.png";

function TodoTemplate() {
  //날짜
  const today = new Date();
  const year = today.getFullYear().toString().padStart(4, "0"); // 년도
  const month = (today.getMonth() + 1).toString().padStart(2, "0"); // 월
  const day = today.getDate().toString().padStart(2, "0"); // 일

  const dateString = `${year}.${month}.${day}.`;

  //todo
  const initialTodoData = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];

  const [list, setList] = useState(initialTodoData);
  const [value, setValue] = useState("");

  const getTodo = (todo) => {
    const newTodo = {
      id: Date.now(),
      title: todo,
      completed: false,
    };
    setList([...list, newTodo]);
    localStorage.setItem("list", JSON.stringify([...list, newTodo]));
  };

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

  //form

  const submitTodo = (e) => {
    e.preventDefault();

    if (value.trim()) {
      getTodo(value);
      setValue("");
    } else {
      alert("할 일을 입력하세요!");
    }
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // input, progressbar toggle
  const [popupVisible, setPopupVisible] = useState(true);

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  const completedTasks = list.filter((task) => task.completed).length;
  const totalTasks = list.length;

  const progressText = `${completedTasks} / ${totalTasks}`;

  return (
    <>
      <GlobalStyle />
      <TopContent>
        <h2 class="todo-title">TODOLIST</h2>
        <span class="date">{dateString}</span>
      </TopContent>

      <TodoInputContainer>
        <img class="popup-button" src={input} onClick={togglePopup}></img>
        <ProgressContainer style={{ display: popupVisible ? "flex" : "none" }}>
          <span class="progress">{progressText}</span>
          <div class="progress-div">
            <div class="progress-bar"></div>
          </div>
        </ProgressContainer>
        <TodoForm
          onSubmit={submitTodo}
          style={{ display: popupVisible ? "none" : "flex" }}
        >
          <img class="todo-input-button" type="submit" src={plus}></img>
          <input
            class="todo-input"
            onChange={handleChange}
            value={value}
            placeholder=""
          />
        </TodoForm>
      </TodoInputContainer>

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

const TopContent = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  max-width: 60%;
  margin: 20px auto;

  .todo-title {
    margin: 0;
    font-family: "Pretendard-Regular";
    font-weight: 900;
    color: #038c11;
  }

  .date {
    font-family: "SUITE-Regular";
    font-weight: 900;
    color: #038c11;
  }
`;

const TodoInputContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;

  max-width: 60%;

  border-radius: 34px;
  border: 3px solid #7adb84;
  padding: 5px 10px;
  margin: 10px auto;

  .popup-button {
    border-radius: 10px;
    border: none;
    margin: 0 10px;
    width: 10%;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  }

  .todo-form {
    display: none;
    flex-direction: row-reverse;
    margin: 0 10px;
    width: 85%;
  }

  .todo-input {
    outline: none;
    background-color: transparent;
    border-color: rgba(221, 221, 221, 0.7);
    border-width: 0 0 2px;

    font-family: "SUITE-Regular";
    font-weight: 500;
    font-size: 10px;
    color: #038c11;

    width: 100%;
    max-width: 100%;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .todo-input:focus {
    transition: border-color 0.3s;
    border-color: #00c013;
  }

  .todo-input-button {
    width: 20px;
    height: 20px;
    background-color: transparent;
    cursor: pointer;
    border: none;
    margin-left: 10px;
  }
`;

const ProgressContainer = styled.article`
  /* display: ${(props) => (props.isVisible ? "block" : "none")}; */
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  width: 88%;

  .progress-div {
    width: 80%;
    height: 20px;
    background-color: rgba(221, 221, 221, 0.7);
    border-radius: 5px;
  }

  .progress-bar {
    width: 0;
    height: 20px;
    border-radius: 5px;
    background-color: #7adb84;
    transition: width 0.3s ease-in-out;
  }

  .progress {
    margin: 0 15px 0 10px;
    width: 15%;
    font-family: "SUITE-Regular";
    font-weight: 900;
    color: #00c013;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const TodoForm = styled.form`
  /* display: ${(props) => (props.isVisible ? "flex" : "none")}; */
  flex-direction: row-reverse;
  margin: 0 10px;
  width: 85%;

  .todo-input {
    width: 100%;
    outline: none;
    background-color: transparent;
    border-color: rgba(221, 221, 221, 0.7);
    border-width: 0 0 2px;

    font-family: "SUITE-Regular";
    font-weight: 500;
    font-size: 10px;
    color: #038c11;
  }

  .todo-input:focus {
    transition: border-color 0.3s;
    border-color: #00c013;
  }

  .todo-input-button {
    width: 20px;
    height: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: transparent;
    cursor: pointer;
    border: none;
    margin-left: 10px;
  }
`;

const TodoContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;

  min-height: 300px;
  max-width: 60%;

  border-radius: 34px;
  border: 3px solid #7adb84;
  padding: 5px 10px;
  margin: 10px auto;

  position: relative;

  .list-title {
    margin: 10px 0 10px 5px;
    font-family: "Pretendard-Regular";
    color: #00c013;
  }

  /* ul 부분 */
  .todo-list,
  .done-list {
    list-style: none;
    margin: 0 0 10px;
    padding: 0px 30px 0px 10px;
  }
`;
