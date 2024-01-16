"use client";

import { PersonalQuestion } from "@/types/PersonalQuestion";
import React from "react";
import useStore from "../store";

export default function Page() {
  const formData = useStore(); // useStore를 통해 현재 상태를 가져옴
  return (
    <div
      style={{ margin: 100, background: "#ffe6e6", padding: 20, width: 700 }}
    ></div>
  );
}
