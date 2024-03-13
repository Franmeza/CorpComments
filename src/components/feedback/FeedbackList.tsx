import FeedBackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import { useFeedbackItemsStore } from "../../store/feedbackItemsStore";

function FeedbackList() {
  const filteredFeedbackItems = useFeedbackItemsStore((state) =>
    state.getFilteredFeedbackItems()
  );
  const isLoading = useFeedbackItemsStore((state) => state.isLoading);
  const errorMessage = useFeedbackItemsStore((state) => state.errorMessage);

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <p>Something went wrong!</p>}
      {filteredFeedbackItems.map((feedbackItem) => (
        <FeedBackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}

export default FeedbackList;
