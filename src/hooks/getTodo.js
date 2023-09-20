export const getTodo = () => {
  return localStorage.getItem("todoList") | [];
};
