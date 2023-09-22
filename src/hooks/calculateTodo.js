export const getTotalTodos = (todoLists) => {
  return todoLists.length;
};

export const getCheckedTodos = (todoLists) => {
  return todoLists.filter((todoList) => todoList.checked).length;
};

export const getProceedingTodos = (todoLists) => {
  return getTotalTodos(todoLists) - getCheckedTodos(todoLists);
};
