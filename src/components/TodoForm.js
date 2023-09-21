import React, { useState } from "react";

//todo Input 받는 부분

function TodoForm({ onSubmit, onChange, value }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        autoFocus
        type="text"
        placeholder="📍Enter your to-do"
        onChange={onChange}
        value={value}
      />
      <button>Add to Do</button>
    </form>
  );
}

export default TodoForm;
