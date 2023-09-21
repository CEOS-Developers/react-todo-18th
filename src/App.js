import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(
    () => JSON.parse(window.localStorage.getItem("todos")) || []
  ); //todo list를 추가할 배열
  const [dones, setDones] = useState(
    () => JSON.parse(window.localStorage.getItem("dones")) || []
  ); //done list를 추가할 배열

  //todos , dones 에 변화가 있을 때마다 local storage에 저장
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    window.localStorage.setItem("dones", JSON.stringify(dones));
  }, [dones]);

  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    //빈 값이 나온 경우 return
    if (todo.trim() === "") {
      setTodo("");
      return;
    }
    setTodos((currentArray) => [todo, ...currentArray]);
    //기존 todos 에서 입력받은 todo 추가해서 new array 저장
    setTodo("");
  };
  //삭제 버튼
  const deleteBtn = (index, isDone) => {
    if (isDone === true) {
      setDones(dones.filter((item, doneIndex) => index !== doneIndex));
    } else {
      setTodos(todos.filter((item, todoIndex) => index !== todoIndex));
    }
  };

  const moveBtn = (index, isDone) => {
    if (isDone === false) {
      //todos-> dones
      const itemToMove = todos[index];
      setTodos(todos.filter((item, todoIndex) => index !== todoIndex)); //todos 에서 제거
      setDones((currentArray) => [itemToMove, ...currentArray]); //dones으로 이동
    } else {
      //dones -> todos
      const itemToMove = dones[index];
      setDones(dones.filter((item, doneIndex) => index !== doneIndex)); // dones 제거
      setTodos((currentArray) => [itemToMove, ...currentArray]); //todos으로 이동
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>

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
    </div>
  );
}

export default App;
