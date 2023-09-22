import TodoItem from "./TodoItem";
import { styled } from "styled-components";

const ListContainer = ({ onEdit, onDelete, moveItem, data }) => {
  // isDone 값이 false인 데이터만 필터링 (todo container에 띄우기)
  const todoData = data.filter((item) => !item.isDone);

  // isDone 값이 true인 데이터만 필터링 (done container에 띄우기)
  const doneData = data.filter((item) => item.isDone);

  return (
    <div className="ListContainer">
      <Container>
        <TitleContainer>
          <Subtitle>"Todo 🟡"</Subtitle>
          <CountTitle>
            You have <CountNum>{todoData.length}</CountNum> things to do.
          </CountTitle>
        </TitleContainer>
        <div>
          {todoData &&
            todoData.map((it) => (
              <TodoItem
                key={it.id}
                {...it}
                onDelete={onDelete}
                onEdit={onEdit}
                moveItem={moveItem}
              />
            ))}
        </div>
      </Container>
      <Container>
        <TitleContainer>
          <Subtitle>"Done 🔵"</Subtitle>
          <CountTitle>
            You completed <CountNum>{doneData.length}</CountNum> things.
          </CountTitle>
        </TitleContainer>
        <div>
          {doneData &&
            doneData.map((it) => (
              <TodoItem
                key={it.id}
                {...it}
                onDelete={onDelete}
                moveItem={moveItem}
              />
            ))}
        </div>
      </Container>
    </div>
  );
};

export default ListContainer;

//CSS
const Container = styled.div`
  width: 20rem;
  height: 10rem;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 2rem;
  padding-bottom: 1rem;
  margin-bottom: 2.5rem;
  border-radius: 20px;
  overflow-y: auto;
  max-height: 130px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const Subtitle = styled.div`
  font-size: 20px;
`;

const CountTitle = styled.div`
  font-size: 13px;
  color: grey;
`;

const CountNum = styled.span`
  color: black;
`;
