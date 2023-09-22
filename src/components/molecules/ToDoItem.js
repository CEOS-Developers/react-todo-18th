import React from "react";
import { Span } from "../atoms/Span";
import { styled } from "styled-components";
import { ImageButton } from "../atoms/ImageButton";
import deleteButton from "../../image/delete.png";
import backButton from "../../image/restore.png";
function ToDoItem({ todo, isSolved }) {
  return (
    <>
      <StyledItem isSolved={isSolved}>
        <Span>{todo}</Span>

        {isSolved ? (
          <ButtonWrapper>
            <ImageButton src={deleteButton} />
            <ImageButton src={backButton} />
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
  padding: 0 14px;
  height: 45px;
  background: var(--gradient);
  cursor: pointer;
  transition: 1s;
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
