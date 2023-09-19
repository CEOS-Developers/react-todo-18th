import {
  AddButton,
  DateInput,
  PriorityInput,
  SecretInput,
  ContentTextArea,
  TodoInputContainer,
} from '../styles/TodoInput.style';
import { useTodoInput } from '../hooks/useTodoInput';

import { authStates, useAuthStore } from '../stores/useAuthStore';

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
    isSecret,
    toDateRef,
    onChangeContent,
    onClickPriority,
    onChangeFromDate,
    onChangeToDate,
    onChangeSecret,
    resetValue,
  } = useTodoInput();

  const authState = useAuthStore((state) => state.auth.authState);

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
      {authState === authStates.AUTHORIZED && (
        <SecretInput checked={isSecret} onChange={onChangeSecret} />
      )}
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
