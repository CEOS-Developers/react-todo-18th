import React from "react";
import Button from "../utils/Button";

//item 추가
function TodoItem({ item, index, moveBtn, deleteBtn, isDone }) {
  return (
    <li>
      {item}
      <Button
        onClick={() => moveBtn(index, isDone)}
        text="↕️"
        backgroundColor="#6aafe6"
        textColor="white"
      />
      <Button
        onClick={() => deleteBtn(index, isDone)}
        text="x"
        backgroundColor="red"
        textColor="white"
      />
    </li>
  );
}

export default TodoItem;
