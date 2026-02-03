import SectionLayout from "./SectionLayout";
import { CircleCheck } from "lucide-react";
import { Trophy } from "lucide-react";
export function Card() {
   return (
      <div className="rounded-2xl max-lg:my-5 flex flex-col gap-3 shadow-xl w-80 max-lg:mx-auto md:w-120 lg:w-170 h-80 bg-white p-8">
         <div className="w-full flex-4 rounded-2xl bg-gradient-to-r from-[#3B5BFF] via-[#5B5CFF] p-6 to-[#8A2EFF]">
            <div className="inline-flex flex-col gap-2">
                <Trophy className="lg:size-20 size-14" color="white" strokeWidth={2.25} />
                <span className="text-base text-white">Your lucky ticket</span>
                <span className="text-base text-yellow-300">TXT12345678</span>
            </div>

         </div>
         <div className="flex-1 flex items-center justify-between">
            <span className="text-gray-500 flex flex-col items-center">
               Quiz Score
               <span className="text-black">10/10</span>
            </span>
            <CircleCheck size={48} color="#08CB00" strokeWidth={2.3} />
            <span className="text-gray-500 flex flex-col items-center">
               Status
               <span className="text-green-600">Eligble</span>
            </span>
         </div>
      </div>
   );
}

const Hero = () => {
   return (
      <SectionLayout customStyle="lg:h-120 py-20 px-8 lg:py-24 bg-[#f3f6ff]">
         <div className="w-full h-full max-lg:flex-col lg:flex items-center justify-between">
            <div className="flex flex-col gap-4 items-center lg:items-start justify-center">
               <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-200 text-yellow-700 font-medium text-base hover:bg-yellow-300 transition">
                  🎉 New Quiz Categories Added!
               </button>
               <span className="text-lg">Play Quiz, Win Tickets, Get Lucky!</span>
               <span className="block max-w-120 max-lg:text-center text-lg text-gray-600">
                  Answer quizzes correctly to earn lucky draw tickets. The more
                  you play, the more chances to win amazing prizes!
               </span>
               <button className="inline-flex text-lg hover:scale-[1.06] mt-2 transition-all items-center gap-2 px-9 py-4 rounded-2xl text-white font-medium bg-gradient-to-r from-[#3B5BFF] via-[#5B5CFF] to-[#8A2EFF] shadow-lg hover:opacity-90 duration-200 ease-in-out">
                  Start Playing Now
                  <span className="text-lg">›</span>
               </button>
            </div>
            <Card />
         </div>
      </SectionLayout>
   );
};
export default Hero;
