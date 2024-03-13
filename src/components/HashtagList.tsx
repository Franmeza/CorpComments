import { useMemo } from "react";

import { useFeedbackItemsStore } from "../store/feedbackItemsStore";

function HashtagList() {
  const feedbackItems = useFeedbackItemsStore((state) => state.feedbackItems);
  const onSelectCompany = useFeedbackItemsStore((state) => state.selectCompany);
  const companyList = useMemo(
    () =>
      feedbackItems
        .map((item) => item.company)
        .filter((company, index, array) => {
          return array.indexOf(company) === index;
        }),
    [feedbackItems]
  );

  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <li key={company}>
          <button onClick={() => onSelectCompany(company)}>#{company}</button>
        </li>
      ))}
    </ul>
  );
}

export default HashtagList;
