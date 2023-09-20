import {
  TodoDetailContainer,
  TodoDetailInner,
  DetailCloseButton,
  DetailTitleDiv,
  DetailInfoDiv,
  DetailBodyDiv,
  DetailButtonsOuter,
  DetailButton,
} from '../styles/TodoDetail.style';
import { convertDate, priorityMap } from '../utils/common';

const TodoDetail = ({
  title,
  body,
  todo,
  handleCloseButton,
  handleClickDeleteButton,
  handleClickDoneButton,
}) => {
  return (
    <TodoDetailContainer>
      <TodoDetailInner>
        <DetailCloseButton onClick={handleCloseButton}>X</DetailCloseButton>
        <DetailTitleDiv>{title}</DetailTitleDiv>
        <DetailInfoDiv>
          <div className="info date">{convertDate(todo.fromDate)}</div>
          <div className="info betweenDate">-</div>
          <div className="info date toDate">{convertDate(todo.toDate)}</div>
          <div className="info">중요도: </div>
          <div className="priority">{priorityMap[todo.priority]}</div>
        </DetailInfoDiv>
        <DetailBodyDiv>{body}</DetailBodyDiv>
        <DetailButtonsOuter>
          <DetailButton
            onClick={() => {
              handleClickDoneButton();
              handleCloseButton();
            }}
          >
            ✓
          </DetailButton>
          <DetailButton onClick={handleClickDeleteButton}>-</DetailButton>
        </DetailButtonsOuter>
      </TodoDetailInner>
    </TodoDetailContainer>
  );
};

export default TodoDetail;
