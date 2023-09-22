import { useState } from "react";
import { styled } from "styled-components";

const TodoItem = ({ onEdit, onDelete, moveItem, value, id, isDone }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [localContent, setLocalContent] = useState(value);

  const toggleIsEdit = (e) => {
    e.stopPropagation();
    setIsEdit(!isEdit);
  };

  //수정 취소
  const handleQuitEdit = (e) => {
    e.stopPropagation();
    setIsEdit(false);
    setLocalContent(value);
  };

  //수정 완료
  const handleCompleteEdit = (e) => {
    e.stopPropagation();
    if (localContent.trim() == "") {
      return;
    }
    if (window.confirm(`할 일을 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit(e);
    }
  };

  return (
    <DataContainer
      className="TodoItem"
      onClick={() => {
        moveItem(id);
      }}
    >
      <Datalist>
        {isEdit ? (
          <>
            <textarea
              value={localContent}
              onClick={(e) => {
                e.stopPropagation();
              }}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>{value}</>
        )}
      </Datalist>
      {isEdit ? (
        <>
          <button
            onClick={(e) => {
              handleQuitEdit(e);
            }}
          >
            수정 취소
          </button>
          <button
            onClick={(e) => {
              handleCompleteEdit(e);
            }}
          >
            수정 완료
          </button>
        </>
      ) : (
        <>
          <button
            onClick={(e) => {
              toggleIsEdit(e);
            }}
          >
            edit
          </button>
          <DeleteBtn
            onClick={(e) => {
              if (window.confirm(`Delete this task?`)) {
                onDelete(id, e);
              }
            }}
          >
            🗑
          </DeleteBtn>
        </>
      )}
    </DataContainer>
  );
};

export default TodoItem;

const DeleteBtn = styled.button`
  opacity: 0;
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const Datalist = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const DataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;
