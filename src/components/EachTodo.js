import styled from "styled-components";

export default function EachTodo({ todo }) {
  return (
    <EachTodoWrapper>
      <CheckBox type="checkbox" checked={todo.checked ? true : false} />
      <TodoText $checked={todo.checked}>
        <span>{todo.todoText}</span>
      </TodoText>
      <DeleteBtn>X</DeleteBtn>
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
