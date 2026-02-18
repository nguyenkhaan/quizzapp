'use client'
import Navbar from "@/components/navbar";
import QuizCard from "@/components/quiz" 
import { Trophy } from "lucide-react";
import Table from "./components/table";
import usePersonal from "@/zustand/personal";
import ProtectedRoute from "@/components/protected";
function DashboardStatistic() 
{
    return (
        <div className="w-84 md:w-120 p-6 lg:w-[464px] h-48 rounded-2xl flex flex-col items-start justify-center gap-2 shadow-[0_0_40px_rgba(0,0,0,0.15)]">
            <div className="w-10 h-10 bg-[#f5eaff] rounded-lg flex items-center justify-center">
                <Trophy color="#8c33d1" size={24} strokeWidth={2.5} /> 
                
            </div>
            <span className="text-base text-gray-600 block">Win Rate</span>
            <span className="text-base block">40</span>
        </div>
    )
}
const Dashboard = () => 
{
   const name = usePersonal((state) => state.name) 
   return (
      <ProtectedRoute>
         <Navbar />
         <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 pb-20 bg-[#faf5fc]">
         <div className="max-w-[1440px] mx-auto px-6 pt-14 lg:pt-18">
            <div className="w-full px-3 lg:px-8 rounded-2xl h-42 my-8 flex items-center justify-start gap-2 lg:gap-4 bg-gradient-to-r from-blue-500 via-indigo-500  to-purple-500">
               <div className="border-6 border-[#7987ff] text-2xl lg:text-4xl flex items-center rounded-full text-white justify-center lg:w-24 lg:h-24 w-16 h-16 md:w-20 md:h-20  bg-[#6367ed]">
                  {name.slice(0 , 2)}
               </div>
               <div className="flex flex-col items-start text-white justify-center gap-2">
                  <h2 className="font-semibold text-xl md:text-xl lg:text-2xl">Welcome back, {name}!</h2>
                  <span className=" text-sm lg:text-lg">
                     Ready to play and win more prizes today?
                  </span>
               </div>
            </div>
            <div className="my-5 flex items-center justify-between">
                <DashboardStatistic /> 
            </div>
            <h2 className="text-base md:text-lg lg:text-xl my-4">Select quiz categories</h2>
            <div className="w-full lg:flex-row flex-col flex items-center justify-between gap-6 lg:gap-4">
               <QuizCard questionSet={1} />
               <QuizCard />
               <QuizCard />
            </div>
            <h2 className="text-base md:text-lg lg:text-xl my-4">Recent Quiz History</h2>
            <Table /> 

         </div>

         </section>
      </ProtectedRoute>
   );
};
export default Dashboard;
