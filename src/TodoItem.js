import { useState } from "react";
import { styled } from "styled-components";

const TodoItem = ({ onEdit, onDelete, moveItem, value, id, isDone }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [localContent, setLocalContent] = useState(value); //수정된 데이터

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
            <EditTextarea
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
      <ButtonsContainer>
        {isEdit ? (
          <>
            <EditingBtn
              onClick={(e) => {
                handleQuitEdit(e);
              }}
            >
              수정 취소
            </EditingBtn>
            <EditingBtn
              onClick={(e) => {
                handleCompleteEdit(e);
              }}
            >
              수정 완료
            </EditingBtn>
          </>
        ) : (
          <>
            <EditBtn
              onClick={(e) => {
                toggleIsEdit(e);
              }}
            >
              {" "}
              edit
            </EditBtn>
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
      </ButtonsContainer>
    </DataContainer>
  );
};

export default TodoItem;

//CSS
const EditBtn = styled.button`
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

const EditingBtn = styled.button`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  padding: 0.3rem 0.5rem;
  margin-left: 0.1rem;
  cursor: pointer;
`;

const DeleteBtn = styled.button`
  opacity: 0;
  white-space: nowrap
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const EditTextarea = styled.textarea`
  background-color: rgba(255, 255, 255, 0.8);
  width: 80%;
  height: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
  font-size: 13px;
  vertical-align: middlle;
`;

const Datalist = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  word-break: break-all;
`;

const DataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;
