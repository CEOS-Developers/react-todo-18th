import React from "react";
import { H1 } from "../atoms/H1";
import { styled } from "styled-components";
import { Span } from "../atoms/Span";
import ToDoItem from "../molecules/ToDoItem";
import { StyledList } from "./NowTodo";
import { useRecoilState } from "recoil";
import { nowTodoList, solvedTodoList } from "../../recoil/atom.ts";

function SolvedTodo() {
  const [solvedTodo, setSolvedTodo] = useRecoilState(solvedTodoList);
  const [nowTodo, setNowTodo] = useRecoilState(nowTodoList);
  return (
    <StyledSolvedTodo>
      <H1> 최근 해결한 내역</H1>
      <Span color="var(--lightWhite)">
        당신이 해결할 일은 모두 이곳에 저장됩니다.
      </Span>
      <StyledList>
        {solvedTodo.map((todo, idx) => (
          <ToDoItem todo={todo} isSolved={true} key={idx} />
        ))}
      </StyledList>
    </StyledSolvedTodo>
  );
}

const StyledSolvedTodo = styled.div`
  position: absolute;
  top: 170px;
  right: 100px;
`;

export default SolvedTodo;
