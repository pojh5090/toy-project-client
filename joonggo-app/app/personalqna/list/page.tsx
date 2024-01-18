"use client";

import React, { useEffect } from "react";
import { useStore } from "../store";

export default function Page() {
  const { formData, setFormData } = useStore((state) => state);
  // useStore를 통해 현재 상태를 가져옴

  // useEffect(() => {
  //   // 원하는 동작 수행
  //   setFormData(formData);
  //   console.log(formData);

  //   // 컴포넌트가 언마운트되면 구독 해제
  //   return () => {
  //     // 구독 해제 로직 추가
  //   };
  // }, []); // formData가 변경될 때마다 useEffect 재실행

  return (
    <>
      <div
        style={{ margin: 100, background: "#ffe6e6", padding: 20, width: 700 }}
      >
        <table>
          <thead>
            <tr>
              <th>제목</th>
              <th>내용</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((question, index) => (
              <tr key={index}>
                <td>{question.title}</td>
                <td>{question.contents}</td>
                <td>{question.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
