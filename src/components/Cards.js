import "../App";
function Cards(props) {
  return (
    <>
      {props.todo.map((element, i) => {
        return (
          <div className="todoList">
            <div className="todoCard">
              <div className="todoElem">{element}</div>
              <div className="todoDelete">X</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Cards;

// .todoList{
//   display:flex;
//   flex-direction: column;
//   width: 450px;
// }
// .todoCard{
//   background-color: #ECECEC;
//   color : black;
//   display:flex; /*todoElem 세로축 가운데 정렬*/
//   align-items:center;
//   justify-content:space-between;/* item 사이 간격 균일하게 */
//   height: 100px;
//   margin : 7px 0;
//   border-radius: 8px;
// }
// .todoCard.checked{
//   transition : opacity 0.3s;
//   opacity: 0.5;
// }
// .todoCard.checked:hover{ /*마우스 올렸을 때 살짝 밝게*/
//   opacity: 0.6;
// }
// .todoElem{
//   flex:1; /*여백 다 채우게끔*/
//   margin-left:30px;
// }
// input[type=checkbox]{
//   margin-left: 20px;
// }
// .todoDelete{
//   border: none;
//   margin-bottom: 80px;
//   margin-right: 5px;
//   font-size: 7px;
//   border-radius: 2px;
//   transition : background-color 0.3s;
// }
// .todoDelete:hover{
//   background-color: #b1b1b1;
// }
