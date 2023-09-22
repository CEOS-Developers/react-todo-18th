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
  width: 100vw;
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
  //local storage에 name, todos 배열, dones 이 존재하면 초기값 설정해줌
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

  //todos, dones, name의 변화가 일어날때마다 local storage에 저장
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
    //todos 배열에 입력받은 todo를 추가해줌
    setTodo("");
  };

  //delete Btn 누르면 -> isDone 여부에 따라 todos, dones 배열을 update
  const deleteBtn = (index, isDone) => {
    if (isDone === true) {
      setDones(dones.filter((item, doneIndex) => index !== doneIndex));
    } else {
      setTodos(todos.filter((item, todoIndex) => index !== todoIndex));
    }
  };

  //move Btn을 누르면 -> isDone 여부에 따라 todos, dones 배열을 update
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

  //name를 입력 -> name 저장
  const handleNameSubmit = (enteredName) => {
    setName(enteredName);
  };

  const titleText = name ? `${name}'s To-Do List` : "To-Do List";

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // 1초마다 현재 날짜 업데이트

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <TodoBox>
        {name ? (
          <Title>{titleText}</Title>
        ) : (
          <NameInput onNameSubmit={handleNameSubmit} />
        )}

        {name && (
          <div>
            <h3>{currentDate.toLocaleString()}</h3>
          </div>
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
