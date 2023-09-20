import styled from "styled-components";
import TodoCountBtn from "../components/TodoCountBtn";
import { useState } from "react";
import { headerBtnState } from "../state/headerBtnState";
import EachTodo from "../components/EachTodo";
import { getTodo } from "../hooks/getTodo";

export default function Todo() {
  const [todoValue, setTodoValue] = useState("");
  const todoLists = getTodo();
  const todoInputChanged = (e) => {
    setTodoValue(e.target.value);
  };
  return (
    <TodoWrapper>
      <TodoHeader>
        <HeaderTitle>
          <span>TO-DO LIST</span>
        </HeaderTitle>
        <HeaderBtnWrapper>
          {headerBtnState.map((btnState) => (
            <TodoCountBtn
              key={btnState.text}
              btnState={btnState}
              addClass="margin:0 1.5rem;"
            />
          ))}
        </HeaderBtnWrapper>
      </TodoHeader>
      <TodoMainBoard>
        <AddTodoWrapper>
          <AddTodoInput
            placeholder="입력하세요"
            value={todoValue}
            onChange={todoInputChanged}
          />
          <AddTodoBtn>
            <span>+</span>
          </AddTodoBtn>
        </AddTodoWrapper>
        <TodoListWrapper>
          {todoList.map((todo, index) => (
            <EachTodo key={todo.todoText + index} todo={todo} />
          ))}
        </TodoListWrapper>
      </TodoMainBoard>
    </TodoWrapper>
  );
}

const TodoWrapper = styled.div`
  padding-top: 6rem;
  min-width: 370px;
  min-height: 100vh;
  background: linear-gradient(to right, #dddddd, #ffffff, #dddddd);
`;

const TodoHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 5rem;
`;

const HeaderTitle = styled.header`
  margin-bottom: 4rem;
  span {
    font-size: 10rem;
    font-weight: 500;
    font-weight: 600;
    font-family: "Giants-Inline";
  }
`;

const HeaderBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
`;

const TodoMainBoard = styled.div`
  width: 100%;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddTodoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
`;

const AddTodoInput = styled.input`
  width: 60rem;
  padding: 1rem;
  margin-right: 2rem;
  font-size: 3.5rem;
  border: none;
  border-bottom: 1px solid transparent;
  border-image: linear-gradient(to left, white, black);
  border-image-slice: 1;
  background-color: transparent;
`;

const AddTodoBtn = styled.button`
  width: 8rem;
  height: 7rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  span {
    font-size: 8rem;
  }
`;

const TodoListWrapper = styled.div``;
