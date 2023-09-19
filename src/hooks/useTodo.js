import { useState } from 'react';

const TODOS = JSON.parse(localStorage.getItem('todos') || '[]').map(
  (todo, id) => ({
    ...todo,
    id,
    fromDate: new Date(todo.fromDate),
    toDate: new Date(todo.toDate),
  })
);

let idx = TODOS.length;

const pushTodo = (todos, newTodo) => {
  if (newTodo.isDone) {
    todos.push(newTodo);
  } else {
    newTodo.id = idx++;
    newTodo.isDone = false;
    let i = 0;
    for (; i < todos.length; i++) {
      if (todos[i].isDone) break; // 완료한 todo보다 무조건 앞에 위치
      if (todos[i].priority < newTodo.priority) break;
      else if (todos[i].priority === newTodo.priority) {
        if (todos[i].fromDate >= newTodo.fromDate) break; // 시작일이 빠른 todo가 더 낲에 위치
      }
    }
    todos.splice(i, 0, newTodo);
  }
};

export const useTodo = () => {
  const [todos, setTodos] = useState(TODOS);

  const saveChanges = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const addTodo = (todo) => {
    if (!todo.content) return;
    const newTodos = [...todos];
    pushTodo(newTodos, todo);

    saveChanges(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    saveChanges(newTodos);
  };

  const changeTodoState = (id) => {
    const newTodos = [...todos];

    let changed = -1;
    newTodos.forEach((todo, idx) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
        changed = idx;
        return;
      }
    });

    const changedTodo = newTodos.splice(changed, 1)[0];
    pushTodo(newTodos, changedTodo);

    saveChanges(newTodos);
  };

  return { todos, addTodo, deleteTodo, changeTodoState };
};
