import React, { useState } from "react";
import Header from "../organism/Header";
import NowTodo from "../organism/NowTodo";
import SolvedTodo from "../organism/SolvedTodo";

function Template() {
  return (
    <>
      <Header />
      <NowTodo />
      <SolvedTodo />
    </>
  );
}

export default Template;
