import styled from 'styled-components';
import { authStates } from '../stores/useAuthStore';

export const TodoInputContainer = styled.div`
  margin: 0 10px 10px 10px;
  width: 100%;
  border-radius: 10px;

  .options {
    border: 1px solid #bcbcbc;
    border-bottom: none;
    display: flex;
    background-color: whiteSmoke;
    flex-wrap: wrap;
    .option {
      box-sizing: border-box;
      height: 50px;
      flex: 1;
      font-size: 14px;
      background-color: white;
      padding: 10px 0;
      border-right: 1px solid #bcbcbc;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }

    .date {
      ${(props) =>
        props.$authState === authStates.AUTHORIZED ? '' : 'border-right:none'}
    }
    .secret {
      input {
        margin-right: 5px;
      }
      div {
        white-space: nowrap;
      }
      border-right: none;
      justify-content: center;
    }

    @media screen and (max-width: 500px) {
      .date {
        border-right: none;
      }
      .option {
        border-bottom: 1px solid #bcbcbc;
      }
    }

    @media screen and (max-width: 453px) {
      .priority {
        border-right: none;
      }
    }

    @media screen and (max-width: 397px) {
      .date {
        border-right: none;
      }
    }
  }
`;

export const ContentTextArea = styled.textarea.attrs({
  // 내용물에 따른 높이조절을 위한 attrs
  placeholder: '내용을 입력해주세요.',
  rows: 1,
  autoFocus: true,
})`
  &::-webkit-scrollbar {
    display: none;
  }

  display: block;
  box-sizing: border-box;
  padding: 15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: 1px solid #bcbcbc;
  border-bottom: none;

  width: 100%;
  resize: none;
`;

export const PriorityOuterDiv = styled.div`
  margin: 0 5px;
  .priorityInput {
  }
  .priorityLabel {
  }
`;

export const DateInput = styled.input.attrs({ type: 'date' })`
  margin: 0 5px;
  border: none;
`;

export const SecretInput = styled.input.attrs({ type: 'checkbox' })``;

export const AddButton = styled.button`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  text-align: center;
  color: white;
  background-color: black;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
