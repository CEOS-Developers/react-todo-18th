const TodoItem = ({ value, id, isDone }) => {
  return (
    <div clssName="TodoItem">
      <div className="data">
        <span>{value}</span>
      </div>
    </div>
  );
};

export default TodoItem;
