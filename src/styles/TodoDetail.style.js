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
  height: 500px;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  //   margin-bottom: 100px;
  background-color: white;
  border-radius: 10px;
`;

export const DetailCloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 18px;
`;

export const DetailTitleDiv = styled.div`
  padding-bottom: 10px;
  margin-right: 13px;
  word-break: break-all;
  font-family: 'SUITE-SemiBold';
`;

export const DetailInfoDiv = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #bcbcbc;
  padding: 10px 0;
  border-bottom: 1px solid #bcbcbc;
  font-size: 14px;
  margin-bottom: 10px;
  .info {
    margin-right: 10px;
  }
  .toDate {
    padding-right: 10px;
    border-right: 1px solid #bcbcbc;
  }
`;

export const DetailBodyDiv = styled.div`
  word-break: break-all;
  color: rgb(120, 120, 120);
  font-family: 'SUITE-Medium';
  line-height: 22px;
  white-space: break-spaces;
  overflow-y: auto;
  margin-bottom: 40px;
  //   white-space: pre-wrap;
`;

export const DetailButtonsOuter = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0%);
`;

export const DetailButton = styled.button`
  margin: 0 10px;
  border-radius: 50%;
  border: 1px solid black;
  width: 20px;
  height: 20px;
  text-align: center;
`;
