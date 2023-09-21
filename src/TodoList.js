import Clock from "./Clock";
import TodoInput from "./TodoInput";
import ListContainer from "./ListContainer";
import { useEffect, useState } from "react";

const TodoList = () => {
  const [data, setData] = useState([]);

  //콘솔창에서 data 확인용
  useEffect(() => {
    console.log(data);
  });

  const onCreate = (content) => {
    const created_date = new Date().getTime();
    const newItem = {
      value: content,
      id: created_date,
      isDone: false,
    };
    setData([...data, newItem]);
  };

  const onDelete = (targetId, e) => {
    e.stopPropagation();
    const newTodoList = data.filter((it) => it.id !== targetId);
    setData(newTodoList);
  };

  const moveItem = (targetId) => {
    const updatedData = data.map((item) => {
      if (item.id === targetId) {
        if (window.confirm(`Move this task?`)) {
          return {
            ...item,
            isDone: !item.isDone,
          };
        }
      }
      return item;
    });
    setData(updatedData);
  };

  return (
    <div className="TodoList">
      <Clock />
      <div className="title">To Do List</div>
      <TodoInput onCreate={onCreate} />
      <div className="content_space">
        <ListContainer onDelete={onDelete} moveItem={moveItem} data={data} />
      </div>
    </div>
  );
};

export default TodoList;
