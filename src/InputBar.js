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
    <form onSubmit={onSubmit}>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">+</button>
    </form>
  );
};

export default InputBar;
