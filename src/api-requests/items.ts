import { TFeedbackItem } from "../utils/types";

const BASE_URL =
  "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks";

export const getItems = () => fetch(BASE_URL);

export const postItems = (newItem: TFeedbackItem) =>
  fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(newItem),
    headers: {
      Accept: "aplication/json",
      "Content-type": "application/json",
    },
  });
