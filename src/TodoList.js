import { useEffect, useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';
import InputBar from './InputBar';

const TodoList = () => {
  const initialData = JSON.parse(localStorage.getItem('todos')) || [];
  const [data, setData] = useState(initialData);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(data));
  }, [data]);

  const nextId = useRef(parseInt(localStorage.getItem('nextId')) || 0);

  const insert = (insertedText) => {
    const insertedItem = {
      id: nextId.current,
      text: insertedText,
      checked: false,
    };
    setData((prevData) => [...prevData, insertedItem]);

    nextId.current += 1;
    localStorage.setItem('nextId', nextId.current.toString());
  };

  const remove = (removedId) => {
    setData((prevData) => prevData.filter((item) => item.id !== removedId));
  };

  const handleItemChange = (updatedItem) => {
    setData((prevData) =>
      prevData.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

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

  padding-left: 10%;
  padding-right: 10%;
  padding-top: 3%;
  padding-bottom: 3%;
`;

export default TodoList;
