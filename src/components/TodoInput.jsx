import {
  AddButton,
  DateInput,
  PriorityOuterDiv,
  // PriorityInput,
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
    <TodoInputContainer $authState={authState}>
      <ContentTextArea
        onChange={onChangeContent}
        value={content}
      ></ContentTextArea>
      <div className="options">
        <div className="option priority">
          {Object.entries(PRIORITY).map(([key, value]) => (
            <PriorityOuterDiv key={key}>
              <input
                id={key}
                type="radio"
                name="priority"
                value={value}
                onClick={onClickPriority}
                defaultChecked={value === priority}
              />
              <label htmlFor={key}>{key}</label>
            </PriorityOuterDiv>
          ))}
        </div>
        <div className="option date">
          <DateInput value={fromDate} onChange={onChangeFromDate} />
          <DateInput value={toDate} onChange={onChangeToDate} ref={toDateRef} />
        </div>

        {authState === authStates.AUTHORIZED && (
          <div className="option secret">
            <SecretInput checked={isSecret} onChange={onChangeSecret} />
            <div>비밀</div>
          </div>
        )}
      </div>
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
