"use client";

import ProtectedRoute from "@/components/protected";
import useQuiz from "@/zustand/quiz";
import { useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";
import Questions, { QuestionType } from "@/zustand/question";
import { TOTAL_QUESTIONS } from "@/constants/contant";
import { ANSWER_CHOICE } from "@/constants/contant";
import Link from "next/link";
const sampleQuestions: QuestionType = {
   id: 10,
   content: "Frontend là gì?",
   A: {
      content: "Phần xử lý server",
      result: false,
   },
   B: {
      content: "Phần xử lý server",
      result: false,
   },
   C: {
      content: "Phần xử lý ngoai vi",
      result: true,
   },
   D: {
      content: "Phần xử lý client",
      result: false,
   },
};

const ChoiceCard = ({
   index = 1,
   result = false,
   content = "",
   isAnswer = false,
   handleAnswer,
}: {
   index: number;
   result: boolean;
   content: string;
   isAnswer: boolean;
   handleAnswer: () => void;
}) => {
   const baseClass =
      "h-30 rounded-lg p-4 items-center justify-start text-base flex gap-2 border border-gray-400 transition-all duration-300";

   const hoverClass =
      "hover:scale-[1.05] hover:border-[#eeddff] hover:bg-[#eeddff] hover:text-[#9d50f3] cursor-pointer";

   const correctClass = "bg-green-100 border-green-500 text-green-700";
   const wrongClass = "bg-red-100 border-red-500 text-red-700";

   return (
      <div
         className={`
            ${baseClass}
            ${!isAnswer && hoverClass}
            ${isAnswer && (result ? correctClass : wrongClass)}
         `}
         onClick={handleAnswer}
      >
         <div
            className={`
               rounded-full flex w-10 h-10 shrink-0 items-center justify-center
               ${
                  isAnswer
                     ? result
                        ? "bg-[#effcf4] text-[#3cc572]"
                        : "bg-[#fceff0] text-[#d74244]"
                     : "bg-gray-300"
               }
            `}
         >
            {ANSWER_CHOICE(index + 1)}
         </div>

         <p className="lg:text-base text-sm">{content}</p>
      </div>
   );
};

const TOTAL_STEP = 10;

const Exam = () => {
   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
   const [thisQuestion, setThisQuestion] =
      useState<QuestionType>(sampleQuestions);

   const handleAnswerClick = (index: number) => {
      if (selectedIndex !== null) return; // chỉ cho chọn 1 lần
      setSelectedIndex(index);
      //Sau khi chon xong roi thi kiem tra xem chung ta co chon dung dap an hay khong ?
      //Chay hamd e tra loi cau hoi
      answerQuestionPlease(currentIndex , ANSWER_CHOICE(index + 1)) 
      setTimeout(() => {
            increaseIndex() //Tang len de tien den cau hoi tiep theo 
      } , 1000)
   };

   const {
      currentIndex,
      myQuestions,
      hasHydrated,
      answer: answerQuestionPlease,
      totalCorrect,
      increaseIndex
   } = useQuiz(
      useShallow((state) => ({
         currentIndex: state.currentIndex,
         hasHydrated: state.hasHydrated,
         answer: state.answer,
         totalCorrect: state.totalCorrect,
         myQuestions: state.myQuestions,
         increaseIndex : state.increaseIndex
      })),
   );

   useEffect(() => {
      if (hasHydrated) {
         setThisQuestion(Questions.getQuestionByID(myQuestions[currentIndex]));
         setSelectedIndex(null); // reset khi sang câu mới
      }
   }, [currentIndex, hasHydrated]);

   return (
      <ProtectedRoute>
         <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 h-screen flex items-center justify-center bg-[#f3f6ff]">
            <div className="w-240 p-6 shadow-xl rounded-xl">
               <div className="w-full flex items-center justify-between">
                    <Link href={'/dashboard'}>
                        <span className="font-semibold cursor-pointer text-lg">Go back</span>
                    </Link>
                  <div className="badge badge-soft badge-primary p-2">
                     Time 24s
                  </div>
               </div>

               <span className="font-semibold mb-3 block">
                  Question {currentIndex + 1} of {TOTAL_QUESTIONS}
               </span>

               <div className="relative w-full h-2 bg-gray-300 rounded-lg">
                  <div
                     className="top-0 bottom-0 ease-in-out transition-all duration-500 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-lg absolute"
                     style={{
                        width: `${((currentIndex + 1) * 100) / TOTAL_STEP}%`,
                     }}
                  ></div>
               </div>

               <p className="text-lg my-5 mb-10">{thisQuestion?.content}</p>

               <div className="grid w-full grid-cols-2 gap-5 grid-rows-2">
                  {[
                     thisQuestion.A,
                     thisQuestion.B,
                     thisQuestion.C,
                     thisQuestion.D,
                  ].map((choice, index) => (
                     <ChoiceCard
                        key={index}
                        index={index}
                        result={choice.result}
                        content={choice.content}
                        isAnswer={selectedIndex === index}
                        handleAnswer={() => handleAnswerClick(index)}
                     />
                  ))}
               </div>
            </div>
         </div>
      </ProtectedRoute>
   );
};

export default Exam;
