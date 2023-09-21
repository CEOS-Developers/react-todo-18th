import Clock from "./Clock";
import TodoInput from "./TodoInput";
import ListContainer from "./ListContainer";
import { useState } from "react";

const TodoList = () => {
  const [data, setData] = useState([]);

  const onCreate = (content) => {
    const created_date = new Date().getTime();
    const newItem = {
      value: content,
      id: created_date,
      isDone: false,
    };
    setData([...data, newItem]);
  };
  return (
    <div className="TodoList">
      <Clock />
      <div className="title">To Do List</div>
      <TodoInput onCreate={onCreate} />
      <div className="todo_space">
        <ListContainer data={data} />
      </div>
      <div className="done_space">
        <ListContainer data={data} />
      </div>
    </div>
  );
};

export default TodoList;
