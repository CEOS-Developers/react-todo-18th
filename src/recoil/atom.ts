import { atom } from "recoil";

export const nowTodoList = atom({
  key: "nowTodoList",
  default: [],
});

export const solvedTodoList = atom({
  key: "solvedTodoList",
  default: [],
});
