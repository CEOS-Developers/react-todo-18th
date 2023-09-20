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
  let [title, ...body] = todo.content.split('\n\n'); // todo를 title과 body로 분리
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  body = body.join('\n\n'); // split된 바디 다시 join해줌
  const authState = useAuthStore((state) => state.auth.authState);

  return (
    <>
      {isDetailModalOpen &&
        body && ( // body가 있는 글만 modal 열리도록
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
          if (todo.isSecret && authState !== authStates.AUTHORIZED) return; // 비밀글이면 클릭 못하게
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
