"use client";

import { PersonalQuestion } from "@/types/PersonalQuestion";
import React from "react";
import useStore from "../store";

export default function Page() {
  const { formData } = useStore((state) => ({ formData: state.formData }));
  // useStore를 통해 현재 상태를 가져옴
  return (
    <div
      style={{ margin: 100, background: "#ffe6e6", padding: 20, width: 700 }}

    > <p>UserId: {formData.userId}</p>
      <p>QuestionNumber: {formData.questionNumber}</p>
      <p>Title: {formData.title}</p>
      <p>Contents: {formData.contents}</p>
    </div>
  );
}
