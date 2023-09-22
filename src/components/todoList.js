import React from "react";
import ItemList from "./itemList";
import styled from 'styled-components';


const ListSection = styled.section`
    display: flex;
    flex-direction: column; 
    height: 17rem; 
    overflow-y: auto;
    margin-bottom: 2rem; 
    word-break: break-all;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    h2 {
      font-size: 2rem;
    }
`;

function TodoList({ todos, switchList, deleteItem }) {
  return (
    <Container>
      <h2>Todo</h2>
      <ListSection>
        {todos.map((todo, index) => (
          <ItemList
            key={index}
            item={todo.text}
            index={index}
            switchList={() => switchList("todos", index)}
            deleteItem={() => deleteItem("todos", index)}
          />
        ))}
      </ListSection>
    </Container>
  );
}

export default TodoList;
