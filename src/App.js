import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]); //todo list를 추가할 배열
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
  const deleteBtn = (index) => {
    setTodos(todos.filter((item, todoIndex) => index !== todoIndex));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <h2>To Do : {todos.length}</h2>
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
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteBtn(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
