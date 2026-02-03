"use client" 
import ProtectedRoute from "@/components/protected";
import { useState } from "react";
const sampleQuestions = {
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
   handleAnswer
}: {
   index: number;
   result: boolean;
   content: string;
   isAnswer: boolean;
   handleAnswer: () => void 
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
            {index + 1}
         </div>

         <p className="lg:text-base text-sm">{content}</p>
      </div>
   );
};

const TOTAL_STEP = 10;
const Exam = () => {
   const [step, setStep] = useState(4);
   const [answer, setAnswer] = useState(false);
   const handleAnswerClick = () => {
      setAnswer(true);
      //neu answer la true thi se tien hanh bat mau
   };
   return (
      <ProtectedRoute>
         <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 h-screen flex items-center justify-center bg-[#f3f6ff]">
            <div className="w-240  p-6 shadow-xl rounded-xl">
               <div className="w-full flex items-center justify-between">
                  <span className="font-semibold text-lg">Go back</span>
                  <div className="badge badge-soft badge-primary p-2">
                     Time 24s
                  </div>
               </div>

               <span className="font-semibold mb-3 block">
                  Question 6 of 10
               </span>
               <div className="relative w-full h-2 bg-gray-300 rounded-lg">
                  <div
                     className="top-0 bottom-0 ease-in-out transition-all duration-500 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-lg absolute"
                     style={{
                        width: `${(step * 100) / TOTAL_STEP}%`,
                     }}
                  ></div>
               </div>
               <div className="w-full rounded-xl bg-gray"></div>
               <p className="text-lg my-5 mb-10 ">
                  {sampleQuestions.content}
               </p>
               <div className="grid w-full grid-cols-2 gap-5 grid-rows-2">
                  {[
                     sampleQuestions.A,
                     sampleQuestions.B,
                     sampleQuestions.C,
                     sampleQuestions.D,
                  ].map((choice, index) => {
                     return (
                        <ChoiceCard
                            key={index}
                           index={index}
                           result={choice.result}
                           content={choice.content}
                           isAnswer={answer}
                           handleAnswer={handleAnswerClick}
                        />
                     );
                  })}
               </div>
            </div>
         </div>
      </ProtectedRoute>
   );
};
export default Exam;
