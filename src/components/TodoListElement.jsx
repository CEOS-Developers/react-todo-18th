import { useState } from 'react';
import {
  TodoListElementContainer,
  ContentDiv,
  ClickFlagDiv,
  DateDiv,
  SecretDiv,
  DoneButton,
  DeleteButton,
} from '../styles/TodoListElement.style';
import { convertDate, priorityMap } from '../utils/common';
import TodoDetail from './TodoDetail';
import { authStates, useAuthStore } from '../stores/useAuthStore';

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
          if (todo.isSecret && authState !== authStates.AUTHORIZED) return;
          setIsDetailModalOpen(true);
        }}
      >
        {todo.isSecret && authState !== authStates.AUTHORIZED ? (
          <SecretDiv>비밀글입니다.</SecretDiv>
        ) : (
          <div
            className={`infoOuter ${priorityMap[todo.priority]} ${
              todo.isDone ? 'done' : ''
            }`}
          >
            <ContentDiv>{title}</ContentDiv>
            {body && <ClickFlagDiv className="">...</ClickFlagDiv>}
            <DateDiv>{convertDate(todo.fromDate)}</DateDiv>
            <span>-</span>
            <DateDiv>{convertDate(todo.toDate)}</DateDiv>
            <DoneButton
              onClick={(e) => {
                handleClickDoneButton();
                e.stopPropagation();
              }}
            >
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
