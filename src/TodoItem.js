const TodoItem = ({ onDelete, value, id, isDone }) => {
  return (
    <div className="TodoItem">
      <div>{value}</div>
      <button
        onClick={() => {
          if (window.confirm(`Delete this task?`)) {
            onDelete(id);
          }
        }}
      >
        🗑
      </button>
    </div>
  );
};

export default TodoItem;
