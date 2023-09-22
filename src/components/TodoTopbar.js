import React, { useState } from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";

import input from "../images/input.png";
import plus from "../images/plus.png";

function TodoTopbar({ list, setList, value, setValue }) {
  //날짜
  const today = new Date();
  const year = today.getFullYear().toString().padStart(4, "0"); // 년도
  const month = (today.getMonth() + 1).toString().padStart(2, "0"); // 월
  const day = today.getDate().toString().padStart(2, "0"); // 일

  const dateString = `${year}.${month}.${day}.`;

  //todo

  const getTodo = (todo) => {
    const newTodo = {
      id: Date.now(),
      title: todo,
      completed: false,
    };
    setList([...list, newTodo]);
    localStorage.setItem("list", JSON.stringify([...list, newTodo]));
  };

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

  //완료 항목 관련 코드
  const completedTasks = list.filter((task) => task.completed).length;
  const totalTasks = list.length;

  const progressText = `${completedTasks} / ${totalTasks}`;

  let ratio = 0;
  if (totalTasks !== 0) {
    ratio = completedTasks / totalTasks;
  }

  return (
    <>
      <TopContent>
        <h2 class="todo-title">TODOLIST</h2>
        <span class="date">{dateString}</span>
      </TopContent>

      <TodoInputContainer>
        <img class="popup-button" src={input} onClick={togglePopup}></img>
        <ProgressContainer style={{ display: popupVisible ? "flex" : "none" }}>
          <span class="progress">{progressText}</span>
          <div class="progress-div">
            <div
              class="progress-bar"
              style={{ width: `${ratio * 100}%` }}
            ></div>
          </div>
        </ProgressContainer>
        <TodoForm
          onSubmit={submitTodo}
          style={{ display: popupVisible ? "none" : "flex" }}
        >
          <button class="todo-input-button" type="submit"></button>
          <input
            class="todo-input"
            onChange={handleChange}
            value={value}
            placeholder=""
          />
        </TodoForm>
      </TodoInputContainer>
    </>
  );
}

export default TodoTopbar;

const TopContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 60%;
  margin: 1.25em auto;

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
  align-items: center;
  justify-content: space-between;

  max-width: 60%;

  border-radius: 2.125em;
  border: 0.1875em solid #7adb84;
  padding: 0.3125em 0.625em;
  margin: 0.625em auto;

  .popup-button {
    border-radius: 0.625em;
    border: none;
    margin: 0 0.625em;
    width: 1.875em;
    height: 1.875em;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  }

  .todo-input {
    outline: none;
    background-color: transparent;
    border-color: rgba(221, 221, 221, 0.7);
    border-width: 0 0 2px;

    font-family: "SUITE-Regular";
    font-weight: 500;
    font-size: 0.625em;
    color: #038c11;

    width: 100%;
    max-width: 100%;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const ProgressContainer = styled.article`
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  width: 88%;

  .progress-div {
    width: 80%;
    height: 1.25em;
    background-color: rgba(221, 221, 221, 0.7);
    border-radius: 0.3125em;
  }

  .progress-bar {
    width: 0;
    height: 1.25em;
    border-radius: 0.3125em;
    background-color: #7adb84;
    transition: width 0.3s ease-in-out;
  }

  .progress {
    margin: 0 15px 0 0.625em;
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
  flex-direction: row-reverse;
  margin: 0 0.625em;
  width: 85%;

  .todo-input {
    width: 100%;
    outline: none;
    background-color: transparent;
    border-color: rgba(221, 221, 221, 0.7);
    border-width: 0 0 0.25em;

    font-family: "SUITE-Regular";
    font-weight: 500;
    font-size: 0.625em;
    color: #038c11;
  }

  .todo-input:focus {
    transition: border-color 0.3s;
    border-color: #00c013;
  }

  .todo-input-button {
    width: 1.875em;
    height: 1.875em;
    background-image: url(${plus});
    background-size: contain;
    background-repeat: no-repeat;
    background-color: transparent;
    cursor: pointer;
    border: none;
    margin-left: 0.625em;
  }
`;
