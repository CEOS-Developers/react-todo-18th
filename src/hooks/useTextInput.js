import { useState } from "react";

function useInput(initialValue = "") {
  const [input, setInput] = useState(initialValue);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e, callback) => {
    if (e.key === "Enter") {
      callback();
    }
  };

  return {
    input,
    handleChange,
    handleKeyPress,
    setInput,
  };
}

export default useInput;
