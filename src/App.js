import "./App.css";
import { useState, useEffect } from "react";
import Cards from "./components/Cards.js";
function App() {
  const [todo, setTodo] = useState(["운동하기", "밥먹기"]);
  const [currentTime, setCurrentTime] = useState(new Date());

  // 시간 업데이트
  const updateClock = () => {
    setCurrentTime(new Date());
  };

  useEffect(() => {
    const timer = setInterval(updateClock, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const options = {
    weekday: "long",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, //오전 오후 나누는거 false 처리
  };
  //string으로 만들어 변수로 변환한다.
  const stringTime = currentTime.toLocaleDateString("ko-KR", options);

  return (
    <>
      <div className="header">
        <div className="logo">TODO-list</div>
        <div className="detail">
          <div>투두리스트를 작성하고 오늘 하루를 기록해요</div>
          <div id="clock-js">{stringTime}</div>
        </div>
      </div>
      <div className="todoInput">
        <input placeholder=" ADD TODO"></input>
        <button id="plusButton">+</button>
      </div>
      <Cards todo={todo}></Cards>
    </>
  );
}

export default App;
