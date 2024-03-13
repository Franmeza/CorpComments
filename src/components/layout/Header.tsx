import { useFeedbackItemsStore } from "../../store/feedbackItemsStore";
import FeedbackForm from "../feedback/FeedbackForm";

function Header() {
  const addItemToList = useFeedbackItemsStore((state) => state.addItemToList);
  return (
    <header>
      <img
        src="https://bytegrad.com/course-assets/js/1/pattern.svg"
        alt="pattern"
        className="pattern"
      />
      <a href="/" className="logo">
        <img
          src="https://bytegrad.com/course-assets/js/1/logo.svg"
          alt="logo"
        />
      </a>
      <h1>
        Give Feedback. <span>Publicly.</span>
      </h1>
      <FeedbackForm onAddToList={addItemToList} />
    </header>
  );
}

export default Header;
