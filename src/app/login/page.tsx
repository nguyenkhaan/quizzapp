"use client";
import { useState } from "react";
import { Logo } from "@/components/navbar";
import Link from "next/link";
import toast from "react-hot-toast";
import usePersonal from "@/zustand/personal";
import { useRouter } from "next/navigation";
const TOTAL_STEP = 1
function FullNameInput({
   value,
   setValue,
}: {
   value: string;
   setValue: React.Dispatch<React.SetStateAction<string>>;
}) {
   const [touched, setTouched] = useState(false);

   const isValid = /^[A-Za-zÀ-ỹ\s]+$/.test(value) && value.length >= 1;

   return (
      <div className="w-full">
         <div
            className={` flex items-center gap-3 px-4 py-3 rounded-xl bg-white border transition-all duration-200 ease-in-out ${touched && !isValid ? "border-red-400" : "border-gray-300"} hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500
        `}
         >
            <svg
               className={`
            h-5 w-5 transition-colors
            ${touched && !isValid ? "text-red-400" : "text-gray-400"}
            group-focus-within:text-blue-500
          `}
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               strokeWidth="2"
            >
               <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
               <circle cx="12" cy="7" r="4" />
            </svg>

            {/* Input */}
            <input
               type="text"
               value={value}
               onChange={(e) => setValue(e.target.value)}
               onBlur={() => setTouched(true)}
               placeholder="Enter your full name"
               className="w-full bg-transparent focus:outline-none"
            />
         </div>

         {/* Error message */}
         {touched && !isValid && (
            <p className="mt-1 text-sm text-red-500">
               Name must contain only letters and spaces
            </p>
         )}
      </div>
   );
}
const isFullnameValid = (value: string) => {
   return /^[A-Za-zÀ-ỹ\s]+$/.test(value) && value.trim().length >= 1;
};
function LoginForm() 
{

   const [value, setValue] = useState("");
   const [submited, setSubmitted] = useState(false); //Dang nhap thanh cong
   const [step , setStep] = useState(0) 
   const setName = usePersonal((state) => state.setName)   //ham dat name vao he thong 
   const router = useRouter() 
   const onHandleSubmit = (e: any) => {
      e.preventDefault();
      if (!isFullnameValid(value)) return;
      //Submit thanh cong thi cho qua step tiep theo
      const toastID = toast.success("Đăng ký tham gia thành công");
      setSubmitted(true) 
      setStep(Math.min(step + 1 , TOTAL_STEP)) 
      //Tien hanh luu du lieu sau do navigate sang trang khac 
      setName(value) 
      toast.loading('Đang đăng nhập' , {id : toastID})
      setTimeout(() => {
         router.push('/dashboard') 
         toast.remove(toastID)
      } ,  3000)   //Delay 3s 
      
   };
   return (
      <form
         className="rounded-xl w-95 md:w-120 lg:w-140 shadow-xl flex flex-col gap-2 bg-white p-6"
         onSubmit={onHandleSubmit}
      >
         <div className="flex w-full text-gray-700 transition-[width] duration-700 ease-in-out items-center justify-between">
            <span>Step {step} of {TOTAL_STEP}</span>
            <span>Personal Info</span>
         </div>
         <div className="w-full h-2 bg-gray-300 relative rounded-lg">
            <div 
               className="top-0 bottom-0 ease-in-out transition-all duration-500 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-lg absolute" 
               style={{
                  width: `${step * 100 / TOTAL_STEP}%`
               }}
            ></div>
         </div>
         <label className="mt-4">Full name</label>
         <FullNameInput value={value} setValue={setValue} />
         <button
            className="my-5 rounded-xl bg-gradient-to-r disabled:opacity-70 disabled:pointer-events-none from-blue-500 via-indigo-500 to-purple-500 cursor-pointer shadow-lg hover:shadow-xl h-11 font-semibold text-white text-lg hover:scale-[1.03] transition-all duration-200 ease-in-out"
            type="submit"
            disabled={submited}
         >
            {
               submited?  <span className="loading loading-spinner mx-2"></span> : <></>
            }
            Continue
         </button>
         <p className="w-full cursor-pointer text-center font-semibold text-base">
            <Link href={"/"}>Back to Home</Link>
         </p>
      </form>
   );
}
const Login = () => {
   return (
      <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 h-screen bg-[#f3f6ff]">
         <div className="w-full h-full flex items-center flex-col gap-3 justify-center">
            <Logo />
            <span>Create Your Account</span>
            <span className="text-gray-600">
               Start your journey to win amazing price
            </span>
            <LoginForm />
         </div>
      </section>
   );
};
export default Login;
