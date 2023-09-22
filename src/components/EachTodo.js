import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { setTodo } from "../hooks/setTodo";

function EachTodo({ index, todo, todoLists, setTodoLists }) {
  const [checkState, setCheckState] = useState(todo.checked);
  const checkboxChanged = (e) => {
    const updatedTodoLists = [...todoLists];
    updatedTodoLists[index] = {
      ...updatedTodoLists[index],
      checked: !updatedTodoLists[index].checked,
    };
    setTodoLists(updatedTodoLists);
    setCheckState((prev) => !prev);
  };
  const deleteTodo = () => {
    const updatedTodoLists = [...todoLists];
    updatedTodoLists.splice(index, 1);
    setTodoLists(updatedTodoLists);
  };
  useEffect(() => {
    setTodo(todoLists);
  }, [todoLists]);
  return (
    <EachTodoWrapper>
      <CheckBox
        type="checkbox"
        checked={checkState}
        onChange={checkboxChanged}
      />
      <TodoText $checked={todo.checked}>
        <span>{todo.todoText}</span>
      </TodoText>
      <DeleteBtn onClick={deleteTodo}>X</DeleteBtn>
    </EachTodoWrapper>
  );
}

const EachTodoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`;

const CheckBox = styled.input`
  margin-right: 1.2rem;
  width: 3rem;
  height: 3rem;
`;

const TodoText = styled.div`
  span {
    font-size: 6rem;
    font-family: "GangwonState";
    text-decoration: ${(props) => (props.$checked ? "line-through" : null)};
  }
`;

const DeleteBtn = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  border: none;
  font-size: 4rem;
  color: gray;
`;

export default React.memo(EachTodo);
