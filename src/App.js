import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]); //todo list를 추가할 배열
  const [done, setDone] = useState("");
  const [dones, setDones] = useState([]);

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

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="📍Enter your to-do"
          onChange={onChange}
          value={todo}
        ></input>
        <button>Add to Do</button>
      </form>
      <hr />
      <h2>To Do : {todos.length}</h2>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => moveBtn(index, false)}>↕️</button>
            <button onClick={() => deleteBtn(index, false)}>❌</button>
          </li>
        ))}
      </ul>
      <hr />
      <h2> Done : {dones.length}</h2>
      <ul>
        {dones.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => moveBtn(index, true)}>↕️</button>
            <button onClick={() => deleteBtn(index, true)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
