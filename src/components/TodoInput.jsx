import {
  AddButton,
  DateInput,
  PriorityOuterDiv,
  SecretInput,
  ContentTextArea,
  TodoInputContainer,
} from '../styles/TodoInput.style';
import { useTodoInput } from '../hooks/useTodoInput';
import { authStates, useAuthStore } from '../stores/useAuthStore';
import { priorityMap } from '../utils/common';

const TodoInput = ({ addTodo }) => {
  const {
    content,
    priority,
    fromDate,
    toDate,
    todo,
    isSecret,
    contentRef,
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
      <div className="options">
        <div className="option priority">
          {priorityMap.map((value, key) => (
            <PriorityOuterDiv key={key}>
              <input
                id={key}
                type="radio"
                name="priority"
                value={key}
                onClick={handleClickPriority}
                checked={key === priority}
                readOnly
              />
              <label htmlFor={key}>{value}</label>
            </PriorityOuterDiv>
          ))}
        </div>
        <div className="option date">
          <DateInput value={fromDate} onChange={handleChangeFromDate} />
          <DateInput
            value={toDate}
            onChange={handleChangeToDate}
            ref={toDateRef}
          />
        </div>
        {authState === authStates.AUTHORIZED && ( // 로그인한 유저면 비밀글 작성 가능하도록
          <div className="option secret">
            <SecretInput checked={isSecret} onChange={handleChangeSecret} />
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
