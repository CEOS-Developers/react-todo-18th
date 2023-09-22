import {
  getCheckedTodos,
  getProceedingTodos,
  getTotalTodos,
} from "../hooks/calculateTodo";
import theme from "../styles/theme";

export const headerBtnState = [
  {
    text: "할 일",
    bgColor: `${theme.colors.allBtn}`,
    getBtnNum: getTotalTodos,
  },
  {
    text: "진행 중",
    bgColor: `${theme.colors.doingBtn}`,
    getBtnNum: getProceedingTodos,
  },
  {
    text: "완료",
    bgColor: `${theme.colors.doneBtn}`,
    getBtnNum: getCheckedTodos,
  },
];
