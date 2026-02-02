import SectionLayout from "./SectionLayout";
import { cn } from "@/lib/utils";
type CardType = {
   title: string;
   description: string;
   backgroundHex: string;
   textHex: string;
};
const CardInformaton: CardType[] = [
   {
      title: "Choose Quiz",
      description: "Select from Math, GK, or IQ categories",
      backgroundHex: "#cae2ff",
      textHex: "#4275c9",
   },
   {
      title: "Answer Correctly",
      description: "Get all questions right to earn a ticket",
      backgroundHex: "#ecdbff",
      textHex: "#a55ed4",
   },
   {
      title: "Win Prizes",  
      description: "Enter the lucky draw and win amazing rewards",
      backgroundHex: "#fff397",
      textHex: "#dda935",
   },
];
function Card({ title, description, backgroundHex, textHex , number }: CardType & { number : number }) {
   return (
      <div 
            className={cn("flex items-center gap-3 justify-center flex-col")}
        >
         <div 
            className={cn("rounded-full w-20 h-20 text-xl border-0 font-md flex items-center justify-center")}
            style={{
                backgroundColor : backgroundHex, 
                color: textHex
            }}
            >
            {number}
         </div>
         <span>{title}</span>
         <span className="text-gray-600">{description}</span>
      </div>
   );
}
const Statistic = () => {
   return (
      <SectionLayout customStyle="h-100">
         <div className="w-full h-full gap-12 flex flex-col items-center justify-center">
            {/* <p className="w-full text-center text-lg">How It Works</p> */}
            <div className="w-full  flex items-center justify-between">
               {CardInformaton.map((info, index) => {
                  return (
                     <Card
                        number={index + 1}
                        key={index}
                        title={info.title}
                        description={info.description}
                        backgroundHex={info.backgroundHex}
                        textHex={info.textHex}
                     />
                  );
               })}
            </div>
         </div>
      </SectionLayout>
   );
};
export default Statistic;
