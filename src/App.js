import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import styled from "styled-components";
import NameInput from "./components/NameInput";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  font-family: "omyu_pretty", sans-serif; // 폰트 지정
`;

const TodoBox = styled.div`
  background-color: white;
  height: 70rem;
  width: 30rem;
  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.2);
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

function App() {
  const [name, setName] = useState(
    () => JSON.parse(window.localStorage.getItem("name")) || ""
  );
  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState(
    () => JSON.parse(window.localStorage.getItem("todos")) || []
  );
  const [dones, setDones] = useState(
    () => JSON.parse(window.localStorage.getItem("dones")) || []
  );

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    window.localStorage.setItem("dones", JSON.stringify(dones));
  }, [dones]);
  useEffect(() => {
    window.localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo.trim() === "") {
      //input 예외처리
      setTodo("");
      alert("Please enter a input!");
      return;
    }
    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo("");
  };

  const deleteBtn = (index, isDone) => {
    if (isDone === true) {
      setDones(dones.filter((item, doneIndex) => index !== doneIndex));
    } else {
      setTodos(todos.filter((item, todoIndex) => index !== todoIndex));
    }
  };

  const moveBtn = (index, isDone) => {
    if (isDone == false) {
      //todo-> done
      const itemToMove = todos[index];
      setTodos(todos.filter((item, todoIndex) => index !== todoIndex));
      setDones((currentArray) => [itemToMove, ...currentArray]);
    } else {
      //done->todo
      const itemToMove = dones[index];
      setDones(dones.filter((item, doneIndex) => index !== doneIndex));
      setTodos((currentArray) => [itemToMove, ...currentArray]);
    }
  };
  const handleNameSubmit = (enteredName) => {
    setName(enteredName);
  };

  const titleText = name ? `${name}'s To-Do List` : "To-Do List";

  return (
    <Container>
      <TodoBox>
        {name ? (
          <Title>{titleText}</Title>
        ) : (
          <NameInput onNameSubmit={handleNameSubmit} />
        )}

        <TodoForm onSubmit={onSubmit} onChange={onChange} value={todo} />

        <hr />
        <h2>To Do : {todos.length}</h2>
        <TodoList
          items={todos}
          moveBtn={moveBtn}
          deleteBtn={deleteBtn}
          isDone={false}
        />

        <hr />
        <h2> Done : {dones.length}</h2>
        <TodoList
          items={dones}
          moveBtn={moveBtn}
          deleteBtn={deleteBtn}
          isDone={true}
        />
      </TodoBox>
    </Container>
  );
}

export default App;
