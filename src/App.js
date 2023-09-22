import React, { useState, useEffect } from "react";
import TodoList from "./components/todoList";
import DoneList from "./components/doneList";
import InputTodo from "./components/inputTodo";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html{ font-size: 62.5%; }

  main {
    display: flex;
    flex-direction: column;
    width: 40rem;
    height: 62rem;
    margin: 3rem auto;
    padding: 2.5rem;
    background-color: #ffffff;
    box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
    border-radius: 1.5rem;
  }

  h1 {
    font-size: 3.5rem;
    color: #000000;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

function App() {
  const [todos, setTodos] = useState([]);
  const [dones, setDones] = useState([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    const savedDones = localStorage.getItem("dones");
    if (savedTodos) setTodos(JSON.parse(savedTodos));
    if (savedDones) setDones(JSON.parse(savedDones));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("dones", JSON.stringify(dones));
  }, [todos, dones]);

  const addTodo = (item) => {
    setTodos([...todos, { id: new Date().getTime(), text: item }]);
  };

  const deleteItem = (listName, index) => {
    const list = listName === "todos" ? todos : dones;
    const newList = [...list];
    newList.splice(index, 1);
    listName === "todos" ? setTodos(newList) : setDones(newList);
  };

  const switchList = (fromListName, index) => {
    let fromList, toList, setFromList, setToList;

    if (fromListName === "todos") {
      fromList = todos;
      toList = dones;
      setFromList = setTodos;
      setToList = setDones;
    } else {
      fromList = dones;
      toList = todos;
      setFromList = setDones;
      setToList = setTodos;
    }

    const itemToMove = fromList[index];
    const newFromList = [...fromList];
    newFromList.splice(index, 1);
    setFromList(newFromList);

    const newToList = [...toList, itemToMove];
    setToList(newToList);
  };

  return (
    <>
      <GlobalStyle />
      <main>
        <h1>할 일</h1>
        <InputTodo addTodo={addTodo} />
        <TodoList todos={todos} switchList={switchList} deleteItem={deleteItem} />
        <DoneList dones={dones} switchList={switchList} deleteItem={deleteItem} />
      </main>
    </>
  );
}

export default App;

