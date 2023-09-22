export const getTodo = () => {
  return JSON.parse(localStorage.getItem("todoList")) || [];
};
