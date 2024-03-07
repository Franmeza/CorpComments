import { useState } from "react";

const MAX_CHARACTERS = 150;

function FeedbackForm() {
  const [text, setText] = useState("");
  const charCount = MAX_CHARACTERS - text.length;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length > MAX_CHARACTERS) {
      return;
    }
    setText(newText);
  };
  return (
    <form className="form">
      <textarea
        onChange={handleChange}
        value={text}
        id="feedback-textarea"
        placeholder="asdf"
      ></textarea>
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p>{charCount}</p>
        <button> submit</button>
      </div>
    </form>
  );
}

export default FeedbackForm;
