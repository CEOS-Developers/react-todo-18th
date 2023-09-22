import React from "react";

function SolvedItem({ text }) {
  return (
    <StyledItem>
      <Span></Span>
    </StyledItem>
  );
}

const StyledItem = styled.div`
  font-size: 15px;
  color: var(--white);
  background: var(--gradient);
  border-radius: 20px;
  cursor: pointer;
  transition: 1s;
  padding: 13px 20px 13px;
`;

export default SolvedItem;
