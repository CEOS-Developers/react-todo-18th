import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { format } from "date-fns";

const ClockText = styled.span`
  font-family: "Pretendard-SemiBold";
  font-size: 13px;
  text-align: center;
  line-height: 1.5em;
  margin-top: 5px;
`;

export default function Clock() {
  const [now, setNow] = useState(new Date());

  //1초마다 now 다시 set
  useEffect(() => {
    const time = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(time);
  }, []);

  let clockFormat = format(now, "hh:mm aa");

  return <ClockText>{clockFormat}</ClockText>;
}
