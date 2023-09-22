import React from "react";
import { Span } from "../atoms/Span";
import { styled } from "styled-components";
import { ImageButton } from "../atoms/ImageButton";
import deleteButton from "../../image/delete.png";
import backButton from "../../image/restore.png";
import { useRecoilState } from "recoil";
import { nowTodoList, solvedTodoList } from "../../recoil/atom.ts";
function ToDoItem({ todo, isSolved }) {
  const [nowTodo, setNowTodo] = useRecoilState(nowTodoList);
  const [solvedTodo, setSolvedTodo] = useRecoilState(solvedTodoList);
  const deleteButtonClick = () => {
    const newSolvedList = solvedTodo.filter((item) => item !== todo);
    setSolvedTodo(newSolvedList);
  };
  const backButtonClick = () => {
    const newSolvedList = solvedTodo.filter((item) => item !== todo);
    setSolvedTodo(newSolvedList);
    setNowTodo([...nowTodo, todo]);
  };
  const clickNowToDo = (e) => {
    // SolvedToDo 아이템 클릭했을 경우, 아무 일도 발생하지 않기하기
    if (isSolved) {
      return;
    } else {
      const targetTodo = e.target.innerText;
      const newNowTodoList = nowTodo.filter((item) => item !== targetTodo);
      setNowTodo(newNowTodoList);
      setSolvedTodo([...solvedTodo, targetTodo]);
    }
  };
  return (
    <>
      <StyledItem isSolved={isSolved}>
        <Span onClick={clickNowToDo}>{todo}</Span>

        {isSolved ? (
          <ButtonWrapper>
            <ImageButton src={deleteButton} onClick={deleteButtonClick} />
            <ImageButton src={backButton} onClick={backButtonClick} />
          </ButtonWrapper>
        ) : (
          ""
        )}
      </StyledItem>
    </>
  );
}

const StyledItem = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  border-radius: 20px;
  padding: 20px 14px;
  height: 45px;
  background: var(--gradient);
  cursor: pointer;
  transition: 1s;
  // 그림자 잘리는 것 방지를 위한 margin 설정
  margin: 10px;
  ${(props) =>
    props.isSolved
      ? ""
      : `
        box-shadow: 0px 0px 20px white;
        &:hover {
          background: yellow;
          > ${Span} {
            color: black; /* 호버 시 Span의 텍스트 색상을 검은색으로 변경 */
          }
        }`}
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`;

export default ToDoItem;
