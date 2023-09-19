import styled from 'styled-components';

export const TodoInputContainer = styled.div``;

export const ContentInput = styled.input``;

export const ContentTextArea = styled.textarea.attrs({
  // 내용물에 따른 높이조절을 위한 attrs
  rows: 1,
  autoFocus: true,
})`
  resize: none;
`;

export const PriorityInput = styled.input.attrs({ type: 'radio' })``;

export const DateInput = styled.input.attrs({ type: 'date' })``;

export const SecretInput = styled.input.attrs({ type: 'checkbox' })``;

export const AddButton = styled.button``;
