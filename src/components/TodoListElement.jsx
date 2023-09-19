import { useState } from 'react';
import {
  TodoListElementContainer,
  ContentDiv,
  DateDiv,
  SecretDiv,
  DoneButton,
  DeleteButton,
} from '../styles/TodoListElement.style';
import { convertDate } from '../utils/common';
import TodoDetail from './TodoDetail';
import { authStates, useAuthStore } from '../stores/useAuthStore';

const PRIORITY = {
  1: 'low',
  2: 'mid',
  3: 'high',
};

const TodoListElement = ({
  todo,
  handleClickDeleteButton,
  handleClickDoneButton,
}) => {
  let [title, ...body] = todo.content.split('\n\n');
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  body = body.join('');
  const authState = useAuthStore((state) => state.auth.authState);

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
        {todo.isSecret && authState !== authStates.AUTHORIZED ? (
          <SecretDiv>비밀글입니다.</SecretDiv>
        ) : (
          <div
            className={`infoOuter ${PRIORITY[todo.priority]} ${
              todo.isDone ? 'done' : ''
            }`}
          >
            <ContentDiv>{title}</ContentDiv>
            <DateDiv>{convertDate(todo.fromDate)}</DateDiv>
            <span>-</span>
            <DateDiv>{convertDate(todo.fromDate)}</DateDiv>
            <DoneButton onClick={handleClickDoneButton}>
              {todo.isDone ? '↪' : '✓'}
            </DoneButton>
            <DeleteButton onClick={handleClickDeleteButton}>-</DeleteButton>
          </div>
        )}
      </TodoListElementContainer>
    </>
  );
};

export default TodoListElement;
