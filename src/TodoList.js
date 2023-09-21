import { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const [data, setData] = useState([
    {
      text: '밥먹기',
      checked: true,
    },
    {
      text: '잠자기',
      checked: false,
    },
  ]);

  //useEffect로 mount될 때 local에서 따오기

  const handleItemChange = (updatedItem) => {
    // 변경된 item을 찾아서 data state를 업데이트합니다.
    const updatedData = data.map((item) =>
      item.text === updatedItem.text ? updatedItem : item
    );
    setData(updatedData);

    // 여기에서 데이터를 로컬 스토리지 또는 다른 저장소에 저장할 수 있습니다.
    // 예: localStorage.setItem('todoData', JSON.stringify(updatedData));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <TodoListBox>
      {data.map((item) => (
        <TodoListItem item={item} onItemChange={handleItemChange} />
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
