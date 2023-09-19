import {
  AddButton,
  DateInput,
  PriorityInput,
  ContentTextArea,
  TodoInputContainer,
} from '../styles/TodoInput.style';
import { useTodoInput } from '../hooks/useTodoInput';

const PRIORITY = {
  high: 3,
  mid: 2,
  low: 1,
};

const TodoInput = ({ addTodo }) => {
  const {
    content,
    priority,
    fromDate,
    toDate,
    todo,
    toDateRef,
    onChangeContent,
    onClickPriority,
    onChangeFromDate,
    onChangeToDate,
    resetValue,
  } = useTodoInput();

  return (
    <TodoInputContainer>
      <ContentTextArea
        onChange={onChangeContent}
        value={content}
      ></ContentTextArea>
      {Object.entries(PRIORITY).map(([key, value]) => (
        <PriorityInput
          key={key}
          name="priority"
          value={value}
          onClick={onClickPriority}
          defaultChecked={value === priority}
        />
      ))}
      <DateInput value={fromDate} onChange={onChangeFromDate} />
      <DateInput value={toDate} onChange={onChangeToDate} ref={toDateRef} />
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
