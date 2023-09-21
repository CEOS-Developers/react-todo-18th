import TodoItem from "./TodoItem";

const ListContainer = ({ onDelete, moveItem, data }) => {
  // isDone 값이 false인 데이터만 필터링
  const todoData = data.filter((item) => !item.isDone);

  // isDone 값이 true인 데이터만 필터링
  const doneData = data.filter((item) => item.isDone);

  return (
    <div className="ListContainer">
      <div className="todoContainer">
        <h1>"Todo 🟡"</h1>
        <h2>You have {todoData.length} things to do.</h2>
        <div>
          {todoData &&
            todoData.map((it) => (
              <TodoItem
                key={it.id}
                {...it}
                onDelete={onDelete}
                moveItem={moveItem}
              />
            ))}
        </div>
      </div>
      <div className="doneContainer">
        <h1>"Done 🔵"</h1>
        <h2>You've done {doneData.length} things.</h2>
        <div>
          {doneData &&
            doneData.map((it) => (
              <TodoItem
                key={it.id}
                {...it}
                onDelete={onDelete}
                moveItem={moveItem}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ListContainer;
