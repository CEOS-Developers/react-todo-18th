import "./App.css";
import { useState, useEffect } from "react";
import Cards from "./components/Cards.js";
import Clock from "./components/Clock.js";
function App() {
  const storedTodo = JSON.parse(localStorage.getItem("data")) || [];
  const [todo, setTodo] = useState(storedTodo);
  const [newTodo, setNewTodo] = useState("");
  //todo 변경 시 localStorage 저장
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(todo));
  }, [todo]);
  //input handler
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };
  // submit 시 todo 추가
  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      const newTodoItem = { content: newTodo, checked: false };
      setTodo([newTodoItem, ...todo]);
      setNewTodo("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo();
  };
  return (
    <div className="wrapper">
      <header className="header">
        <div className="logo">TODO-list</div>
        <div className="detail">
          <div>투두리스트를 작성하고 오늘 하루를 기록해요</div>
          <Clock />
        </div>
      </header>
      <form className="todoInput" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder=" ADD TODO"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button id="plusButton" type="submit">
          +
        </button>
      </form>
      <main>
        <Cards todo={todo} setTodo={setTodo}></Cards>
      </main>
    </div>
  );
}

export default App;
