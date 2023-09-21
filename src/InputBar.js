import { useState } from 'react';
import styled from 'styled-components';

const InputBar = ({ insert }) => {
  const [value, setValue] = useState('');
  const checkValue = (tempVal) => {
    //입력값 유효성 검사
    tempVal = tempVal.trim();
    if (tempVal === '') {
      alert('입력이 필요해요!');
      return false;
    } else if (tempVal.length >= 30) {
      alert('30자 이하로 입력해주세요!');
      return false;
    }
    return true;
  };
  const onSubmit = (e) => {
    if (checkValue(value)) {
      insert(value);
      setValue(''); //입력값 초기화
      e.preventDefault();
    }
  };

  return (
    <InputForm onSubmit={onSubmit}>
      <InputBox
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="할 일을 입력하세요"
      />
    </InputForm>
  );
};

const InputForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;

  padding-bottom: 3%;
`;
const InputBox = styled.input`
  width: 100%;
  height: 2rem;
  border: none;
  border-radius: 10px;
  transition: border-color 0.2s;
  outline: none;
  font-size: 1vw;

  &:focus {
    border-color: rgba(239, 64, 90, 0.2);
    box-shadow: 0 0 0 2px rgba(239, 64, 90, 0.2);
  }

  padding-left: 3%;
`;

export default InputBar;
