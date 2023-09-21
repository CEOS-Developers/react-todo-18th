import TodoItem from "./TodoItem";

const ListContainer = ({ data }) => {
  return (
    <div className="ListContainer">
      <h1>Todo 🟡</h1>

      <div>{data && data.map((it) => <TodoItem key={it.id} {...it} />)}</div>
    </div>
  );
};

export default ListContainer;
