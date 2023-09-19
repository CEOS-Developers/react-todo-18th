import { useState } from 'react';
import {
  TodoListElementContainer,
  ContentDiv,
  DateDiv,
  DoneButton,
  DeleteButton,
} from '../styles/TodoListElement.style';
import { convertDate } from '../utils/common';
import TodoDetail from './TodoDetail';

const TodoListElement = ({
  todo,
  handleClickDeleteButton,
  handleClickDoneButton,
}) => {
  let [title, ...body] = todo.content.split('\n\n');
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  body = body.join('');

  return (
    <>
      {isDetailModalOpen && body && (
        <TodoDetail
          title={title}
          body={body}
          todo={todo}
          handleCloseButton={() => {
            setIsDetailModalOpen(false);
          }}
          handleClickDeleteButton={handleClickDeleteButton}
          handleClickDoneButton={handleClickDoneButton}
        />
      )}
      <TodoListElementContainer
        onClick={() => {
          setIsDetailModalOpen(true);
        }}
      >
        <ContentDiv>{title}</ContentDiv>
        <DateDiv>{convertDate(todo.fromDate)}</DateDiv>
        <span>-</span>
        <DateDiv>{convertDate(todo.fromDate)}</DateDiv>
        <DoneButton onClick={handleClickDoneButton}>
          {todo.isDone ? '↪' : '✓'}
        </DoneButton>
        <DeleteButton onClick={handleClickDeleteButton}>-</DeleteButton>
      </TodoListElementContainer>
    </>
  );
};

export default TodoListElement;
