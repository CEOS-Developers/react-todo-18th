import React from "react";
//item 추가
function TodoItem({ item, index, moveBtn, deleteBtn, isDone }) {
  return (
    <li>
      {item}
      <button onClick={() => moveBtn(index, isDone)}>↕️</button>
      <button onClick={() => deleteBtn(index, isDone)}>❌</button>
    </li>
  );
}

export default TodoItem;
