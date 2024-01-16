import { create } from "zustand";
import { PersonalQuestion } from "@/types/PersonalQuestion";

// Zustand 스토어 생성
interface StoreState {
  formData: PersonalQuestion;
  setFormData: (newData: Partial<PersonalQuestion>) => void;
}

const useStore = create<StoreState>()((set) => ({
  formData: {
    userId: "",
    questionNumber: 0,
    title: "",
    contents: "",
    writeDate: new Date(),
  },
  setFormData: (newData) =>
    set((state) => ({ formData: { ...state.formData, ...newData } })),
}));

export default useStore;
