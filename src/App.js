import React, { useState, useEffect } from "react";
import TodoList from "./components/todoList";
import DoneList from "./components/doneList";
import InputTodo from "./components/inputTodo";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  main {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 620px;
    margin: 30px auto;
    padding: 25px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
  }

  h1 {
    font-size: 35px;
    color: #000000;
    text-align: center;
    margin-bottom: 20px;
  }
`;
function App() {
  const [todos, setTodos] = useState([]);
  const [dones, setDones] = useState([]);

  const addTodo = (item) => {
    setTodos([...todos, { id: new Date().getTime(), text: item }]);
  };//item 추가

  const deleteItem = (listName, index) => {
    const list = listName === "todos" ? todos : dones;
    const newList = [...list];
    newList.splice(index, 1);
    listName === "todos" ? setTodos(newList) : setDones(newList);
  };

//기존의 리스트와, 인덱스를 받아 todo <-> done , 

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
