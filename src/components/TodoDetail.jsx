import {
  TodoDetailContainer,
  DetailCloseButton,
  DetailTitleDiv,
  DetailInfoDiv,
  DetailBodyDiv,
  DetailButtonsOuter,
  DetailButton,
} from '../styles/TodoDetail.style';
import { convertDate } from '../utils/common';

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
      <DetailCloseButton onClick={handleCloseButton}>X</DetailCloseButton>
      <DetailTitleDiv>{title}</DetailTitleDiv>
      <DetailInfoDiv>
        <div className="">{convertDate(todo.fromDate)}</div>
        <div className="">{convertDate(todo.toDate)}</div>
        <div className="">{todo.priority}</div>
      </DetailInfoDiv>
      <DetailBodyDiv>{body}</DetailBodyDiv>
      <DetailButtonsOuter>
        <DetailButton onClick={handleClickDeleteButton}>삭제</DetailButton>
        <DetailButton onClick={handleClickDoneButton}>완료</DetailButton>
      </DetailButtonsOuter>
    </TodoDetailContainer>
  );
};

export default TodoDetail;
