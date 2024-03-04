function FeedbackForm() {
  return (
    <form className="form">
      <textarea name="" id="feedback-textarea" placeholder="asdf"></textarea>
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p>150</p>
        <button> submit</button>
      </div>
    </form>
  );
}

export default FeedbackForm;
