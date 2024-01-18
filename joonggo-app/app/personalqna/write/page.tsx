"use client";

import React, { FormEvent, ChangeEvent, useRef } from "react";
import { useStore } from "../store";
import { PersonalQuestion } from "../../_types/PersonalQuestion";

export default function Page() {
  const { formData, setFormData } = useStore();

  const inputRefs = {
    userId: useRef<HTMLInputElement>(null),
    title: useRef<HTMLInputElement>(null),
    contents: useRef<HTMLTextAreaElement>(null),
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    // formData를 직접 변경하고 setFormData에 전달
    const updatedFormData = {
      userId: inputRefs.userId.current?.value || "",
      title: inputRefs.title.current?.value || "",
      contents: inputRefs.contents.current?.value || "",
      questionNumber: 0,
      writeDate: new Date(),
    };

    console.log(updatedFormData);

    // 기존 배열에 새로운 객체 추가
    setFormData(updatedFormData);

    console.log(formData);

    // 입력 필드 초기화
    Object.values(inputRefs).forEach((ref) => {
      if (ref.current) ref.current.value = "";
    });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {};

  return (
    <div
      style={{ margin: 100, background: "#ffe6e6", padding: 20, width: 700 }}
    >
      <form onSubmit={onSubmit}>
        <h3>아이디</h3>
        <input
          style={{ width: 150 }}
          name="userId"
          onChange={handleChange}
          ref={inputRefs.userId}
        />
        <br />
        <br />
        <h3>제목</h3>
        <input
          style={{ width: 500 }}
          name="title"
          onChange={handleChange}
          ref={inputRefs.title}
        />

        <h3>문의 내용</h3>
        <textarea
          style={{ width: 500, height: 400, resize: "none" }}
          name="contents"
          onChange={handleChange}
          ref={inputRefs.contents}
        />
        <button
          style={{
            width: 100,
            background: "white",
            borderRadius: 100,
            marginLeft: 30,
          }}
          type="submit"
        >
          등록
        </button>
      </form>
    </div>
  );
}
