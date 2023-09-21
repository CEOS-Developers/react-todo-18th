import TodoItem from "./TodoItem";

const ListContainer = ({ onDelete, data }) => {
  return (
    <div className="ListContainer">
      <h1>Todo 🟡</h1>
      <h2>You have {data.length} things to do.</h2>
      <div>
        {data &&
          data.map((it) => (
            <TodoItem key={it.id} {...it} onDelete={onDelete} />
          ))}
      </div>
    </div>
  );
};

export default ListContainer;
