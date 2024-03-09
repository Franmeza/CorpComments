import { TFeedbackItem } from "../utils/types";

type HashtagListProps = {
  feedbackItems: TFeedbackItem[];
  onSelectCompany: (company: string) => void;
};

function HashtagList({ feedbackItems, onSelectCompany }: HashtagListProps) {
  const companyList = feedbackItems
    .map((item) => item.company)
    .filter((company, index, array) => {
      return array.indexOf(company) === index;
    });

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
