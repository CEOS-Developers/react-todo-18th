import React, { useState } from "react";
import Button from "../utils/Button";
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
      <Button text={"Add to Do"}></Button>
    </form>
  );
}

export default TodoForm;
