import { create } from "zustand";
import { TFeedbackItem } from "../utils/types";
import { getItems, postItems } from "../api-requests/items";

type Store = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  selectedCompany: string;
  getFilteredFeedbackItems: () => TFeedbackItem[];
  addItemToList: (text: string) => Promise<void>;
  selectCompany: (company: string) => void;
  fetchFeedbackItems: () => Promise<void>;
};

export const useFeedbackItemsStore = create<Store>((set, get) => ({
  feedbackItems: [],
  isLoading: false,
  errorMessage: "",
  selectedCompany: "",
  getFilteredFeedbackItems: () => {
    const state = get();
    return state.selectedCompany
      ? state.feedbackItems.filter(
          (feedbackItem) => feedbackItem.company === state.selectedCompany
        )
      : state.feedbackItems;
  },
  addItemToList: async (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);

    const newFeedback: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
    };

    set((state) => ({
      feedbackItems: [...state.feedbackItems, newFeedback],
    }));

    try {
      await postItems(newFeedback);
    } catch (error) {
      console.log(error);
    }
  },
  selectCompany: (company: string) => {
    set(() => ({
      selectedCompany: company,
    }));
  },
  fetchFeedbackItems: async () => {
    try {
      set(() => ({
        isLoading: true,
      }));
      const res = await getItems();

      if (!res.ok) {
        throw new Error();
      }
      const data = await res.json();
      set(() => ({
        feedbackItems: data.feedbacks,
      }));
      set(() => ({
        isLoading: false,
      }));
    } catch (error) {
      set(() => ({
        errorMessage: "Something went wrong",
      }));
    }
    set(() => ({
      isLoading: false,
    }));
  },
}));
