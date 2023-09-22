import TodoItem from "./TodoItem";
import styled from "styled-components";
//Todo list 이동 관리

const ListContainer = styled.div`
  height: 20rem;
  overflow-y: auto;
  // 내용이 넘치면 스크롤바 나타나게
`;

function TodoList({ items, moveBtn, deleteBtn, isDone }) {
  return (
    <ListContainer>
      <ul>
        {items.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            index={index}
            moveBtn={moveBtn}
            deleteBtn={deleteBtn}
            isDone={isDone}
          />
        ))}
      </ul>
    </ListContainer>
  );
}

export default TodoList;
