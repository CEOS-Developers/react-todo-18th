import { useRef, useState } from "react";

const TodoInput = ({ onCreate }) => {
  const contentInput = useRef();
  const [content, setContent] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (content.trim() !== "") {
      onCreate(content);
      alert("Good Luck!👍🏻");
      setContent("");
    } else {
      //todo 입력값이 없으면 input칸 focus 기능
      contentInput.current.focus();
      return;
    }
  };

  return (
    <div className="TodoInput">
      <div>
        <input
          ref={contentInput}
          name="input_box"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSubmit}>✚</button>
      </div>
    </div>
  );
};
export default TodoInput;
