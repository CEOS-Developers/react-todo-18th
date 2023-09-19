import styled from 'styled-components';

export const TodoDetailContainer = styled.div`
  position: fixed;
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  padding: 30px;
`;

export const TodoDetailInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  // height: 521px;
  background-color: white;
  border-radius: 10px;
`;

export const DetailCloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 18px;
`;

export const DetailTitleDiv = styled.div``;

export const DetailInfoDiv = styled.div``;

export const DetailBodyDiv = styled.div``;

export const DetailButtonsOuter = styled.div``;

export const DetailButton = styled.button``;
