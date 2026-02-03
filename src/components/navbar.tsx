import { Trophy } from "lucide-react";
import { Globe } from "lucide-react";
export function Logo() {
   return (
      <div
         className="flex items-center justify-start gap-3 text-lg bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent"
      >
         <div className="p-2 rounded-xl cursor-pointer bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
            <Trophy className="lg:size-8 size-5" color="white" strokeWidth={2.25} />
         </div>
         <span className="font-md text-sm lg:text-base">QuizWin</span>
      </div>
   );
}
const Navbar = () => {
   return (
      <div
         className="
        fixed top-0 left-0 right-0 z-[99999] h-14 lg:h-18 w-full bg-white/70 shadow-lg backdrop-blur-lg border-b border-white/30"
      >
         <div className="max-w-[1440px] mx-auto h-full px-6 flex items-center justify-between">
            <Logo />
            <button className="btn btn-ghost px-2 gap-3 text-base">
               <Globe size={20} strokeWidth={1.25} />
               VN
            </button>
         </div>
      </div>
   );
};
export default Navbar;
