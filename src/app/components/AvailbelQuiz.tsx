import SectionLayout from "./SectionLayout"
import QuizCard from "@/components/quiz"
const AvailableQuiz = () => 
{
    return (
        <SectionLayout customStyle="lg:h-120 bg-[#f3f6ff]">
            <div className="w-full lg:py-0 py-8 h-full gap-12 flex flex-col items-center justify-center">
                <p className="w-full text-lg text-center">Available Quiz Categories</p>
                <div className="w-full lg:flex-row flex-col flex items-center justify-between gap-6 lg:gap-4">
                    <QuizCard /> 
                    <QuizCard /> 
                    <QuizCard /> 
                </div>
            </div>

        </SectionLayout>
    )
}
export default AvailableQuiz