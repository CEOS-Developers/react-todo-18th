import styled from "styled-components";

export default function TodoCountBtn({ btnState, addClass }) {
  return (
    <BtnWrapper $bgColor={btnState.bgColor} $addClass={addClass}>
      <span>{btnState.text}: 10</span>
    </BtnWrapper>
  );
}

const BtnWrapper = styled.div`
  width: 22rem;
  height: 9rem;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: ${(props) => props.$bgColor};
  ${(props) => props.$addClass}
  span {
    font-size: 3.5rem;
    font-weight: 500;
    font-weight: 600;
    font-family: "Giants-Inline";
  }
`;
