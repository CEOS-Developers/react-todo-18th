import { useEffect, useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';
import InputBar from './InputBar';

const TodoList = () => {
  const initialData = JSON.parse(localStorage.getItem('todos')) || [];
  const [data, setData] = useState(initialData);
  const [doneData, setDoneData] = useState(
    initialData.filter((item) => item.checked)
  );

  //목록 업데이트 시 ls저장
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(data));
    setDoneData(data.filter((item) => item.checked));
  }, [data]);

  const nextId = useRef(parseInt(localStorage.getItem('nextId')) || 0);

  //할일 추가 함수
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

  //할일 삭제 함수
  const remove = (removedId) => {
    setData((prevData) => prevData.filter((item) => item.id !== removedId));
  };

  //할일 완료 함수
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
      <SubTitle>
        {doneData.length} / {data.length} 완료
      </SubTitle>
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
  //최대높이, 스크롤바 설정
  max-height: 45vh;
  overflow: auto;
`;

const SubTitle = styled.div`
  font-size: 1vw;
  font-weight: 200;
  color: gray;

  margin-left: 85%;
`;
export default TodoList;
