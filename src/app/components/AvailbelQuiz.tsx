import SectionLayout from "./SectionLayout"
import Quiz from "@/components/quiz"
const AvailableQuiz = () => 
{
    return (
        <SectionLayout customStyle="h-120 bg-[#f3f6ff]">
            <div className="w-full h-full gap-12 flex flex-col items-center justify-center">
                <p className="w-full text-lg text-center">Available Quiz Categories</p>
                <div className="w-full flex items-center justify-between gap-4">
                    <Quiz /> 
                    <Quiz /> 
                    <Quiz /> 
                </div>
            </div>

        </SectionLayout>
    )
}
export default AvailableQuiz