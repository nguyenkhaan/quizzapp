'use client'
import { Lightbulb } from "lucide-react"
import useQuiz from "@/zustand/quiz"
import { useShallow } from "zustand/shallow"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
const QuizCard = ({
    questionSet =  1   //Ma bo cau hoi 
} : {
    questionSet? : number    //Khi bam vao thi no tien hanh load cau hoi tu ngan hang cau hoi (neu chua load fuck fuck fuck)
}) => 
{
    //Sau nay cai tien hon thi cho no load bo cau hoi Fuck Fuck Fuck bang cach truyen vao 1 tham so 
    const {hasHydrated , loadMyQuestions , myQuestions} = useQuiz(
        useShallow((state) => ({
            hasHydrated : state.hasHydrated, 
            loadMyQuestions : state.loadMyQuestions, 
            myQuestions : state.myQuestions
        }))
    )
    const router = useRouter() 
    const handleClick = () => {
        console.log(myQuestions) 
        if (questionSet && myQuestions.length == 0)   //Sau nay nang cap bo sung them questionSet thi kiem tra xem goi cau hoi dang lam hien tai la gi, neu khong trung thi cho phep ghi de lai goi cau 
        //Mo rong hon nua: Su dung backend de luu nhieu tien trinh cau hoi 
        {
            loadMyQuestions() //Tien hanh load danh sach ID cua bo cau hoi, luu giu lai 
            
        }
        router.push('/quiz')
    }
    return (
        <div className="w-84 md:w-120 lg:w-[464px] text-lg cursor-pointer h-56 lg:h-62 bg-white p-5 flex flex-col items-start px-7 justify-center gap-3 rounded-2xl shadow-lg">
            <div className="p-2 lg:p-3 rounded-xl bg-pink-600">
                <Lightbulb className="lg:size-10 size-7" color="white" size={38} strokeWidth={1.75} />
            </div>
            <div>
                <h2 className="md:text-lg text-base mb-1">IQ Challenge</h2>
                <span className="text-gray-600 text-sm md:text-base">75 questions available</span>
            </div>
            <span className="text-blue-600 text-base md:text-lg hover:scale-[1.1] transition-all duration-300 ease-in-out" onClick={handleClick}>Start Quiz</span>
        </div>
    )
}
export default QuizCard