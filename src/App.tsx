import { useEffect } from "react";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import HashtagList from "./components/HashtagList";
import { useFeedbackItemsStore } from "./store/feedbackItemsStore";

function App() {
  const fetchFeedbackItems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems
  );

  useEffect(() => {
    fetchFeedbackItems();
  }, []);

  return (
    <div className="app">
      <Footer />
      <Container />
      <HashtagList />
    </div>
  );
}

export default App;
