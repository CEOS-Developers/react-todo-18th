export const setTodo = (todoList) => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};
