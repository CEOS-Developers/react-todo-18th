import React from "react";
import { H1 } from "../atoms/H1";
import { Span } from "../atoms/Span";
import ToDoItem from "../molecules/ToDoItem";
import { styled } from "styled-components";

function NowTodo({ nowTodo, setSolvedTodo }) {
  console.log(nowTodo);
  return (
    <StyledNowTodo>
      <H1>✔ 지금 당장 해결하세요.</H1>
      <Span color="var(--lightWhite)">
        총 {nowTodo.length} 개의 할 일이 있어요.
      </Span>
      <StyledList>
        {nowTodo.map((todo) => (
          <ToDoItem todo={todo} setSolvedTodo={setSolvedTodo} />
        ))}
      </StyledList>
    </StyledNowTodo>
  );
}

// SolvedTodo.js에서 사용하기 위함
export const StyledList = styled.div`
  display: flex;
  margin-top: 20px;
  overflow-x: visible;
  flex-direction: column;
  align-items: start;
  gap: 30px;
  height: 300px;
`;

const StyledNowTodo = styled.div`
  position: absolute;
  top: 170px;
  left: 50px;
`;
export default NowTodo;
