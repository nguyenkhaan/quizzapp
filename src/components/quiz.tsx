import { Lightbulb } from "lucide-react"
const Quiz = () => 
{
    return (
        <div className="w-[464px] text-lg cursor-pointer h-62 bg-white p-5 flex flex-col items-start px-7 justify-center gap-3 rounded-xl shadow-xl">
            <div className="p-3 rounded-xl bg-pink-600">
                <Lightbulb color="white" size={38} strokeWidth={1.75} />
            </div>
            <div>
                <h2 className="mb-1">IQ Challenge</h2>
                <span className="text-gray-600 text-base">75 questions available</span>
            </div>
            <span className="text-blue-600">Start Quiz</span>
        </div>
    )
}
export default Quiz