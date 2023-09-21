import styled from 'styled-components';
import Header from './Header';
import TodoList from './TodoList';

function App() {
  return (
    <Wrapper>
      <TodoBox>
        <Header />
        <TodoList />
      </TodoBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodoBox = styled.div`
  background-color: red;
  width: 70%;
  height: 80%;

  margin-top: 5%;
  margin-bottom: 5%;

  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(255, 89, 0, 0.1) 36.57%,
    rgba(239, 64, 90, 0.2) 100%
  );
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.05);
`;

export default App;
