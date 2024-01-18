import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PersonalQuestion } from "../_types/PersonalQuestion";

interface StoreState {
  formData: PersonalQuestion[];
  setFormData: (newData: PersonalQuestion) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      formData: [],
      setFormData: (newData) =>
        set((state) => ({
          formData: Array.isArray(newData)
            ? [...newData]
            : [...state.formData, newData],
        })),
    }),
    {
      name: "persistedStore", // 영구 저장 이름
      getStorage: () => sessionStorage, // localStorage 등 다른 스토리지 사용 가능
    }
  )
);
