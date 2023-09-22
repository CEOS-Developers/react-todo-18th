import Clock from "./Clock";
import TodoInput from "./TodoInput";
import ListContainer from "./ListContainer";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const TodoList = () => {
  const [data, setData] = useState([]);

  //콘솔창에서 data 확인용
  useEffect(() => {
    console.log(data);
  });

  //localstorage

  useEffect(() => {
    const localData = localStorage.getItem("todos");
    if (localData) {
      const parsedDataList = JSON.parse(localData);
      setData(parsedDataList);
    }
  }, []);

  //새로운 데이터를 추가하는 함수
  const onCreate = (content) => {
    const created_date = new Date().getTime();

    const newItem = {
      value: content,
      id: created_date,
      isDone: false,
    };

    const newData = [...data, newItem];
    localStorage.setItem("todos", JSON.stringify(newData));
    setData([...data, newItem]);
  };

  const onDelete = (targetId, e) => {
    e.stopPropagation();
    const newTodoList = data.filter((it) => it.id !== targetId);
    localStorage.setItem("todos", JSON.stringify(newTodoList));
    setData(newTodoList);
  };

  const moveItem = (targetId) => {
    const updatedData = data.map((item) => {
      if (item.id === targetId) {
        if (window.confirm(`일을 이동시키겠습니까?`)) {
          return {
            ...item,
            isDone: !item.isDone,
          };
        }
      }
      return item;
    });
    localStorage.setItem("todos", JSON.stringify(updatedData));
    setData(updatedData);
  };

  return (
    <Container>
      <Clock />
      <Title>To Do List</Title>
      <TodoInput onCreate={onCreate} />
      <div className="content_space">
        <ListContainer onDelete={onDelete} moveItem={moveItem} data={data} />
      </div>
    </Container>
  );
};

export default TodoList;

//CSS
const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 100px;
  padding-top: 10px;
  padding-bottom: 140px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 600px;
  overflow: hidden;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin: 0 auto;
`;
