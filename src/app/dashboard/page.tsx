import Navbar from "@/components/navbar";
import QuizCard from "@/components/quiz" 
import { Trophy } from "lucide-react";
import Table from "./components/table";
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
const Dashboard = () => {
   return (
      <>
         <Navbar />
         <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 pb-20 bg-[#faf5fc]">
         <div className="max-w-[1440px] mx-auto pt-14 lg:pt-18">
            <div className="w-full px-8 rounded-2xl h-42 my-8 flex items-center justify-start gap-4 bg-gradient-to-r from-blue-500 via-indigo-500  to-purple-500">
               <div className="border-6 border-[#7987ff] text-4xl flex items-center rounded-full text-white justify-center w-24 h-24  bg-[#6367ed]">
                  AN
               </div>
               <div className="flex flex-col items-start text-white justify-center gap-2">
                  <h2 className="font-semibold text-2xl">Welcome back, An!</h2>
                  <span className="text-lg">
                     Ready to play and win more prizes today?
                  </span>
               </div>
            </div>
            <div className="my-5 flex items-center justify-between">
                <DashboardStatistic /> 
            </div>
            <h2 className="text-xl my-4">Select quiz categories</h2>
            <div className="w-full lg:flex-row flex-col flex items-center justify-between gap-6 lg:gap-4">
               <QuizCard />
               <QuizCard />
               <QuizCard />
            </div>
            <h2 className="text-xl my-4">Recent Quiz History</h2>
            <Table /> 

         </div>

         </section>
      </>
   );
};
export default Dashboard;
