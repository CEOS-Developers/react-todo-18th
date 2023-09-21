const TodoItem = ({ onDelete, moveItem, value, id, isDone }) => {
  return (
    <div
      className="TodoItem"
      onClick={() => {
        moveItem(id);
      }}
    >
      <div>{value}</div>
      <button
        onClick={(e) => {
          if (window.confirm(`Delete this task?`)) {
            onDelete(id, e);
          }
        }}
      >
        🗑
      </button>
    </div>
  );
};

export default TodoItem;
