import { Logo } from "./navbar";
import { Star } from "lucide-react";
const Footer = () => {
   return (
      <div className="w-screen h-80 bg-[#101727] py-14 relative left-1/2 right-1/2 -translate-x-1/2">
         <div className="mx-auto max-w-[1440px]  gap-6 flex justify-between items-start">
            <div className="flex-1">
               <Logo />
               <span className="text-gray-500 my-4 block text-lg">
                  Play quiz, earn tickets, win prizes
               </span>
            </div>
            <div className="flex flex-4 gap-4 justify-evenly items-start">
               <ul className="text-white text-lg">
                  <li className="font-semibold mb-4">Quick Links</li>
                  <li className="my-2">About us</li>
                  <li className="my-2">How to play</li>
                  <li className="my-2">Winners</li>
               </ul>
               <ul className="text-white text-lg">
                  <li className="font-semibold mb-4">Quick Links</li>
                  <li className="my-2">About us</li>
                  <li className="my-2">How to play</li>
                  <li className="my-2">Winners</li>
               </ul>
               <ul className="text-white text-lg">
                   <li className="font-semibold mb-4">Follow us</li>
                  <div className="flex justify-between gap-4 items-start">
                        <button className="text-white p-2 font-semibold btn btn-square border-0 bg-[#1d2a3a]">
                            <Star size={20} />
                        </button>
                                          <button className="text-white p-2 font-semibold btn btn-square border-0 bg-[#1d2a3a]">
                            <Star size={20} />
                        </button>
                        
                        
                  </div>
               </ul>
            </div>
         </div>
         <div className="mx-auto h-0.5 bg-gray-500 my-7 max-w-[1440px]">

         </div>
         <p className="w-full text-center text-gray-500 text-lg">© 2026 QuizWin. All rights reserved.</p>
      </div>
   );
};
export default Footer;
