import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin: 0.2rem;
  position: relative;
  border: none;
  display: inline-block;
  padding: 1rem;
  border-radius: 0.5rem;
  font-family: "TheJamsil5Bold", sans-serif;
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

function Button({ onClick, text, backgroundColor, textColor, buttonSize }) {
  return (
    <StyledButton
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        //버튼 크기 선택 옵션
        width: buttonSize === "small" ? "40px" : "80px",
        height: buttonSize === "small" ? "40px" : "40px",
      }}
    >
      {text}
    </StyledButton>
  );
}
export default Button;
