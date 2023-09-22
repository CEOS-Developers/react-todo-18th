import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

const DateField = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  background-color: #e0e0e0;
  color: #302e2e;
  border: 0.5px solid #736e6e;
  margin-bottom: 5px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const DateText = styled.span`
  font-family: "Pretendard-SemiBold";
  letter-spacing: 1px;
  font-size: 13px;
  padding-top: 3px;
`;

export default function DailyDate() {
  const week = new Array("sun", "mon", "tue", "wed", "thu", "fri", "sat");

  const now = new Date();
  const day = week[now.getDay()];

  let formatDate = format(now, "yyyy-MM-dd");

  return (
    <DateField>
      <DateText>
        {formatDate} {day}
      </DateText>
    </DateField>
  );
}
