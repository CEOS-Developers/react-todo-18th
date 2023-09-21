import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const timeOptions = {
    hour12: false, // 24 시간 형식 사용
    hour: "2-digit", //항상 두자릿수로 표현
    minute: "2-digit",
    second: "2-digit",
  };

  return (
    <div className="Clock">
      <h1>{time.toLocaleTimeString([], timeOptions)}</h1>
    </div>
  );
};

export default Clock;
