import React, { useState } from "react";
import Header from "../organism/Header";
import NowTodo from "../organism/NowTodo";
import SolvedTodo from "../organism/SolvedTodo";

function Template() {
  // todoList 관리
  const [nowTodo, setNowTodo] = useState(["공부해야해", "으아아악"]);
  const [solvedTodo, setSolvedTodo] = useState(["공부하셈"]);
  return (
    <>
      <Header setTodo={setNowTodo} />
      <NowTodo nowTodo={nowTodo} setSolvedTodo={setSolvedTodo} />
      <SolvedTodo solvedTodo={solvedTodo} />
    </>
  );
}

export default Template;
