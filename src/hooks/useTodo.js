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

export const useTodo = () => {
  const [todos, setTodos] = useState(TODOS);

  const saveChanges = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const addTodo = (todo) => {
    if (!todo.content) return;

    todo.id = idx++;
    todo.isDone = false;
    const newTodos = [...todos];

    let i = 0;
    for (; i < newTodos.length; i++) {
      if (newTodos[i].isDone) break; // 완료한 todo보다 무조건 앞에 위치
      if (newTodos[i].priority < todo.priority) break;
      else if (newTodos[i].priority === todo.priority) {
        if (newTodos[i].fromDate >= todo.fromDate) break; // 시작일이 빠른 todo가 더 낲에 위치
      }
    }
    newTodos.splice(i, 0, todo);

    saveChanges(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    saveChanges(newTodos);
  };

  const changeTodoState = (id) => {
    const newTodos = [...todos];

    newTodos.forEach((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
        return;
      }
    });

    saveChanges(newTodos);
  };

  return { todos, addTodo, deleteTodo, changeTodoState };
};
