import Clock from "./Clock";
import ListContainer from "./ListContainer";

const TodoList = () => {
  return (
    <div className="TodoList">
      <Clock />
      <div className="title">To Do List</div>
      <div className="input_body">
        <input />
        <button>+</button>
      </div>
      <div className="todo_space">
        <ListContainer />
      </div>
      <div className="done_space">
        <ListContainer />
      </div>
    </div>
  );
};

export default TodoList;
