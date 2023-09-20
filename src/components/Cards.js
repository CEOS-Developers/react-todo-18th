import "../App";
function Cards(props) {
  //todo state 에서 삭제
  const handleOnClick = (index) => {
    const copyTodo = [...props.todo];
    copyTodo.splice(index, 1);
    props.setTodo(copyTodo);
  };
  return (
    <>
      <div className="todoList">
        {props.todo.map((element, i) => {
          return (
            <div className="todoCard">
              <div className="todoElem">{element}</div>
              <input type="checkbox"></input>
              <div className="todoDelete" onClick={() => handleOnClick(i)}>
                X
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cards;
