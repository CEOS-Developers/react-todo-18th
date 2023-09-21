import { useEffect, useState } from 'react';
import styled from 'styled-components';

const InputBar = ({ insert }) => {
  const [value, setValue] = useState('');
  const onSubmit = (e) => {
    insert(value);
    setValue(''); //입력값 초기화
    e.preventDefault();
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

  &:focus {
    border-color: rgba(239, 64, 90, 0.2);
    box-shadow: 0 0 0 2px rgba(239, 64, 90, 0.2);
  }

  padding-left: 3%;
`;

export default InputBar;
