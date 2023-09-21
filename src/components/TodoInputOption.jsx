import { authStates, useAuthStore } from '../stores/useAuthStore';
import { priorityMap } from '../utils/common';
import {
  DateInput,
  PriorityOuterDiv,
  SecretInput,
} from '../styles/TodoInput.style';
import { memo } from 'react';

const TodoInputOption = ({
  priority,
  fromDate,
  toDate,
  isSecret,
  toDateRef,
  handleClickPriority,
  handleChangeFromDate,
  handleChangeToDate,
  handleChangeSecret,
}) => {
  const authState = useAuthStore((state) => state.auth.authState);
  return (
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
  );
};

export default memo(TodoInputOption);
