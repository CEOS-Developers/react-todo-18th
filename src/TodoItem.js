import { styled } from "styled-components";

const TodoItem = ({ onDelete, moveItem, value, id, isDone }) => {
  return (
    <DataContainer
      className="TodoItem"
      onClick={() => {
        moveItem(id);
      }}
    >
      <Datalist>{value}</Datalist>
      <DeleteBtn
        onClick={(e) => {
          if (window.confirm(`Delete this task?`)) {
            onDelete(id, e);
          }
        }}
      >
        🗑
      </DeleteBtn>
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
