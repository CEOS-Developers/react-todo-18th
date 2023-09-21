import { useCallback, useRef, useState } from 'react';

// todo의 input data를 처리하기 위한 custom hook
export const useTodoInput = () => {
  const [content, setContent] = useState('');
  const [priority, setPriority] = useState(2);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [isSecret, setIsSecret] = useState(false);

  const contentRef = useRef(); // todo 추가시 textarea height 초기화를 위해
  const toDateRef = useRef(); // 시작일 설정에 따라 종료일의 min값을 설정하기 위해

  const todo = {
    content: content.trim(),
    priority,
    fromDate: fromDate ? new Date(fromDate) : new Date(),
    toDate: toDate ? new Date(toDate) : new Date(),
    isSecret,
  };

  const handleChangeContent = (e) => {
    setContent(e.target.value);
    // 줄바꿈에 따라 textarea의 높이도 조절되도록
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  const handleClickPriority = useCallback((e) => {
    setPriority(Number(e.target.value));
  }, []);

  const handleChangeFromDate = useCallback(
    (e) => {
      setFromDate(e.target.value);
      toDateRef.current.min = e.target.value;
      if (toDate < e.target.value) setToDate('');
    },
    [toDate]
  );

  const handleChangeToDate = useCallback((e) => {
    setToDate(e.target.value);
  }, []);

  const handleChangeSecret = useCallback((e) => {
    setIsSecret(e.target.checked);
  }, []);

  const resetValue = () => {
    setContent('');
    setPriority(2);
    setFromDate('');
    setToDate('');
    setIsSecret(false);
    contentRef.current.style.height = 'auto'; // textarea 높이 초기화
  };

  return {
    content,
    priority,
    fromDate,
    toDate,
    todo,
    isSecret,
    contentRef,
    toDateRef,
    handleChangeContent,
    handleClickPriority,
    handleChangeFromDate,
    handleChangeToDate,
    handleChangeSecret,
    resetValue,
  };
};
