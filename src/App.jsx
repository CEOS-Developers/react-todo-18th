import TodoInput from './components/TodoInput';
import TodoListElement from './components/TodoListElement';
import { useTodo } from './hooks/useTodo';
import { AppContainer, TitleH1, TodoListUl } from './styles/App.style';

function App() {
  const { todos, addTodo, deleteTodo, changeTodoState } = useTodo();

  return (
    <AppContainer>
      <TitleH1>나의 할 일</TitleH1>
      <TodoInput addTodo={addTodo} />
      <TodoListUl>
        {todos.map((todo) => (
          <TodoListElement
            key={todo.id}
            todo={todo}
            handleClickDeleteButton={deleteTodo.bind(null, todo.id)}
            handleClickDoneButton={changeTodoState.bind(null, todo.id)}
          />
        ))}
      </TodoListUl>
    </AppContainer>
  );
}

export default App;
