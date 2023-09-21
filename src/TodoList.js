import { useEffect, useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';
import InputBar from './InputBar';

const TodoList = () => {
  const [data, setData] = useState([
    {
      id: 1,
      text: '밥먹기',
      checked: true,
    },
    {
      id: 2,
      text: '밥먹기',
      checked: true,
    },
    {
      id: 3,
      text: '잠자기',
      checked: false,
    },
  ]);

  //useEffect로 mount될 때 local에서 따오기
  useEffect(() => {
    console.log(data);
  }, [data]);

  const nextId = useRef(4);

  const insert = (insertedText) => {
    nextId.current += 1;
    const insertedItem = {
      id: nextId.current,
      text: insertedText,
      checked: false,
    };
    setData(data.concat(insertedItem));

    nextId.current += 1;
  };

  const remove = (removedId) => {
    setData(data.filter((item) => item.id !== removedId));
  };

  const handleItemChange = (updatedItem) => {
    // 변경된 item을 찾아서 data state를 업데이트합니다.
    const updatedData = data.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setData(updatedData);

    // 여기에서 데이터를 로컬 스토리지 또는 다른 저장소에 저장할 수 있습니다.
    // 예: localStorage.setItem('todoData', JSON.stringify(updatedData));
  };

  useEffect(() => {
    // console.log(data);
  }, [data]);

  return (
    <TodoListBox>
      <InputBar insert={insert} />
      {data.map((item) => (
        <TodoListItem
          key={item.id}
          item={item}
          onItemChange={handleItemChange}
          remove={remove}
        />
      ))}
    </TodoListBox>
  );
};

const TodoListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding-left: 5%;
  padding-top: 3%;
  padding-bottom: 3%;
`;

export default TodoList;
