import { useState } from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const [data, setData] = useState([
    {
      id: 1,
      text: '밥먹기',
      checked: true,
    },
    {
      id: 2,
      text: '잠자기',
      checked: false,
    },
  ]);

  //useEffect로 mount될 때 local에서 따오기

  return (
    <ul>
      {data.map((item) => (
        <TodoListItem item={item} />
      ))}
    </ul>
  );
};

export default TodoList;
