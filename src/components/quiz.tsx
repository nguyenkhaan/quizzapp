import { Lightbulb } from "lucide-react"
const QuizCard = () => 
{
    return (
        <div className="w-84 md:w-120 lg:w-[464px] text-lg cursor-pointer h-56 lg:h-62 bg-white p-5 flex flex-col items-start px-7 justify-center gap-3 rounded-2xl shadow-lg">
            <div className="p-2 lg:p-3 rounded-xl bg-pink-600">
                <Lightbulb className="lg:size-10 size-7" color="white" size={38} strokeWidth={1.75} />
            </div>
            <div>
                <h2 className="mb-1">IQ Challenge</h2>
                <span className="text-gray-600 text-base">75 questions available</span>
            </div>
            <span className="text-blue-600">Start Quiz</span>
        </div>
    )
}
export default QuizCard