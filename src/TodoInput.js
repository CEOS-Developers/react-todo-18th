import { useState } from "react";
import { styled } from "styled-components";

const TodoInput = ({ onCreate }) => {
  const [content, setContent] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.nativeEvent.isComposing) return;
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (content.trim() !== "") {
      onCreate(content);
      setContent("");
    } else {
      alert("할 일을 1자 이상 입력하세요.");
      return;
    }
  };

  return (
    <Container>
      <InputBox
        name="input_box"
        value={content}
        placeholder="type here..."
        onChange={(e) => {
          setContent(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <InputBtn onClick={handleSubmit}>✚</InputBtn>
    </Container>
  );
};
export default TodoInput;

const Container = styled.div`
  width: 380px;
  padding: 0.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.input`
  width: 200px;
  flex: 1;
  padding: 0.8rem;
  border: none;
  outline: none;
  border-radius: 10px;
`;

const InputBtn = styled.button`
  width: 40px;
  background-color: black;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 0.8rem;
  cursor: pointer;
  margin-left: 10px;
  &:hover {
    background-color: gray; /* 마우스 호버 시 배경색 변경 */
  }
`;
