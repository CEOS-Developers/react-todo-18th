import { styled } from "styled-components";
export const Span = styled.div`
  font-size: 15px;
  padding: 5px;
  color: ${(props) => props.color || "var(--white)"};
`;
