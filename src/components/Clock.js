import "../App.css";
import { useState, useEffect } from "react";

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // 시간 업데이트
  const updateClock = () => {
    setCurrentTime(new Date());
  };

  useEffect(() => {
    //mount 시 timer 셋팅
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

  return <div id="clock-js">{stringTime}</div>;
}

export default Clock;
