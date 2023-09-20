import "../App";
function Cards(props) {
  return (
    <>
      <div className="todoList">
        {props.todo.map((element, i) => {
          return (
            <div className="todoCard">
              <div className="todoElem">{element}</div>
              <input type="checkbox"></input>
              <div className="todoDelete">X</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cards;
