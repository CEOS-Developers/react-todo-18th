import "../App";
import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
const TodoCard = styled.div`
  background-color: var(--card-color);
  color: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  margin: 5px 0;
  border-radius: 8px;
  position: relative;
  transition: opacity 0.3s;
  opacity: ${(props) => (props.checked ? "0.5" : "1")};
  &:hover {
    opacity: ${(props) => (props.checked ? "0.6" : "1")};
  }
`;
const TodoElem = styled.div`
  margin-left: 30px;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;
function Cards({ todo, setTodo }) {
  const unCheckedTodo = todo.filter((element) => !element.checked);
  const checkedTodo = todo.filter((element) => element.checked);

  //todo state 에서 삭제
  const handleOnClick = (element) => {
    const copyTodo = [...todo];
    const index = copyTodo.findIndex((e) => e === element);
    copyTodo.splice(index, 1);

    setTodo(copyTodo);
  };
  //element에 해당하는 index를 찾아서 checked 바꿔주고 state 변경
  const handleChecked = (element) => {
    const copyTodo = [...todo];
    const index = copyTodo.findIndex((e) => e === element);
    copyTodo[index].checked = !copyTodo[index].checked;
    setTodo(copyTodo);
  };

  return (
    <>
      <div className="todoList">
        {unCheckedTodo.map((element, i) => {
          return (
            <TodoCard>
              <TodoElem>{element.content}</TodoElem>
              <input
                type="checkbox"
                checked={element.checked}
                onChange={() => handleChecked(element)}
              ></input>
              <div
                className="todoDelete"
                onClick={() => handleOnClick(element)}
              >
                x
              </div>
            </TodoCard>
          );
        })}
        {checkedTodo.map((element, i) => {
          return (
            <TodoCard checked>
              <TodoElem checked>{element.content}</TodoElem>
              <input
                type="checkbox"
                checked={element.checked}
                onChange={() => handleChecked(element)}
              ></input>
              <div
                className="todoDelete"
                onClick={() => handleOnClick(element)}
              >
                x
              </div>
            </TodoCard>
          );
        })}
      </div>
    </>
  );
}

export default Cards;
