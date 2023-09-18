import TodoInput from './components/TodoInput';
import { AppContainer, TitleH1, TodoListUl } from './styles/App.style';

function App() {
  return (
    <AppContainer>
      <TitleH1>나의 할 일</TitleH1>
      <TodoInput />
      <TodoListUl></TodoListUl>
    </AppContainer>
  );
}

export default App;
