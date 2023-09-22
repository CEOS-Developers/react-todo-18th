import { atom } from "recoil";

export const nowTodoList = atom({
  key: "nowTodoList",
  default: ["안녕하세요 정인영입니다", "제이와이티입니다."],
});

export const solvedTodoList = atom({
  key: "solvedTodoList",
  default: ["이게 맞아", "축제 가고싶어요"],
});
