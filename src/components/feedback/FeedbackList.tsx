import { TFeedbackItem } from "../../utils/types";
import FeedBackItem from "./FeedbackItem";
import Spinner from "../Spinner";

type FeedbackListProps = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
};

function FeedbackList({
  feedbackItems,
  isLoading,
  errorMessage,
}: FeedbackListProps) {
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <p>Something went wrong!</p>}
      {feedbackItems.map((feedbackItem) => (
        <FeedBackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}

export default FeedbackList;