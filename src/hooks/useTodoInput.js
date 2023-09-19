import { useRef, useState } from 'react';

export const useTodoInput = () => {
  const [content, setContent] = useState('');
  const [priority, setPriority] = useState(3);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const toDateRef = useRef();

  const todo = {
    content: content.trim(),
    priority,
    fromDate: fromDate ? new Date(fromDate) : new Date(),
    toDate: toDate ? new Date(toDate) : new Date(),
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  const onClickPriority = (e) => {
    setPriority(Number(e.target.value));
  };

  const onChangeFromDate = (e) => {
    setFromDate(e.target.value);
    toDateRef.current.min = e.target.value;
    if (toDate < e.target.value) setToDate('');
  };

  const onChangeToDate = (e) => {
    setToDate(e.target.value);
  };

  const resetValue = () => {
    setContent('');
    setPriority(3);
    setFromDate('');
    setToDate('');
  };

  return {
    content,
    priority,
    fromDate,
    toDate,
    todo,
    toDateRef,
    onChangeContent,
    onClickPriority,
    onChangeFromDate,
    onChangeToDate,
    resetValue,
  };
};
