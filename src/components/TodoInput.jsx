import {
  AddButton,
  ContentTextArea,
  TodoInputContainer,
} from '../styles/TodoInput.style';
import { useTodoInput } from '../hooks/useTodoInput';
import { useAuthStore } from '../stores/useAuthStore';
import TodoInputOption from './TodoInputOption';

const TodoInput = ({ addTodo }) => {
  const {
    content,
    priority,
    fromDate,
    toDate,
    todo,
    isSecret,
    contentRef,
    fromDateRef,
    toDateRef,
    handleChangeContent,
    handleClickPriority,
    handleChangeFromDate,
    handleChangeToDate,
    handleChangeSecret,
    resetValue,
  } = useTodoInput();

  const authState = useAuthStore((state) => state.auth.authState);

  return (
    <TodoInputContainer $authState={authState}>
      <ContentTextArea
        ref={contentRef}
        onChange={handleChangeContent}
        value={content}
      ></ContentTextArea>
      <TodoInputOption
        priority={priority}
        fromDate={fromDate}
        toDate={toDate}
        isSecret={isSecret}
        fromDateRef={fromDateRef}
        toDateRef={toDateRef}
        handleClickPriority={handleClickPriority}
        handleChangeFromDate={handleChangeFromDate}
        handleChangeToDate={handleChangeToDate}
        handleChangeSecret={handleChangeSecret}
      />
      <AddButton
        onClick={() => {
          addTodo(todo);
          resetValue();
        }}
      >
        +
      </AddButton>
    </TodoInputContainer>
  );
};

export default TodoInput;
