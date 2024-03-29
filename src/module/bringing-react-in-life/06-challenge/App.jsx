import { useState } from "react";
import "./style.css";

function LimitedTextInput({ characterLimit = 20 }) {
  const [inputValue, setInputValue] = useState("");
  const remainingCharacters = characterLimit - inputValue.length;
  const limitExceeds = remainingCharacters < 0;

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    if (limitExceeds) {
      alert("The input exceeds the character limit. Please shorten your text");
    } else {
      alert("Thanks for your submission");
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="limited-text-input">Limited Text Input:</label>
        <span className={limitExceeds ? "error" : "no-error"}>
          Characters remaining: {remainingCharacters}
        </span>
      </div>
      <input
        type="text"
        placeholder="Enter some text"
        id="limited-text-input"
        value={inputValue}
        onChange={handleChange}
      />

      <button type="submit" className="primary">
        Submit
      </button>
    </form>
  );
}

export default function App() {
  return (
    <>
      <LimitedTextInput />
    </>
  );
}
