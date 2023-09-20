import "./App.css";
import { useState, useEffect } from "react";
import Cards from "./components/Cards.js";
import Clock from "./components/Clock.js";
function App() {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  //input handler
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };
  // submit 시 todo 추가
  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodo([newTodo, ...todo]);
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
