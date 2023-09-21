import React from "react";
import Button from "../utils/Button";
import styled from "styled-components";

const TodoItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
  margin-bottom: 3px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

function TodoItem({ item, index, moveBtn, deleteBtn, isDone }) {
  return (
    <TodoItemWrapper>
      {item}
      <ButtonContainer>
        <Button
          onClick={() => moveBtn(index, isDone)}
          text="↕️"
          backgroundColor="#6aafe6"
          textColor="white"
        />
        <Button
          onClick={() => deleteBtn(index, isDone)}
          text="x"
          backgroundColor="red"
          textColor="white"
        />
      </ButtonContainer>
    </TodoItemWrapper>
  );
}

export default TodoItem;
