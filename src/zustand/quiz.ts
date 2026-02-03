import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import Questions, { QuestionType } from './question'
// import { TOTAL_QUESTIONS } from '@/constants/contant'
import shuffleArray from '@/lib/shuffle'

type AnswerType = 'A' | 'B' | 'C' | 'D'

type QuizType = {
  myQuestions: number[]
  currentIndex: number
  totalCorrect: number
  time: number

  loadMyQuestions: () => void
  answer: (index: number, answer: AnswerType) => boolean
  increaseIndex: () => QuestionType | null
  decreaseIndex: () => QuestionType | null
  setTime: (currentTime: number) => void
  resetQuiz: () => void, 
  hasHydrated: boolean
}
const useQuiz = create<QuizType>()(
  persist(
    (set, get) => ({
      myQuestions: [],
      currentIndex: 0,
      totalCorrect: 0,
      time: 0,
      hasHydrated: false,

      loadMyQuestions: () => {
        const exam = shuffleArray(Questions.attemptQuiz())
        set({
          myQuestions: exam,
          currentIndex: 0,
          totalCorrect: 0,
          time: 0,
        })
      },

      answer: (index, answer) => {
        const id = get().myQuestions[index]
        if (!id) return false

        const res = Questions.getAnswerByID(id, answer)

        if (res) {
          set((state) => ({
            totalCorrect: state.totalCorrect + 1,
          }))
        }

        return res
      },

      increaseIndex: () => {
        const { currentIndex, myQuestions } = get()
        if (currentIndex >= myQuestions.length - 1) return null

        const newIndex = currentIndex + 1
        const id = myQuestions[newIndex]
        const question = Questions.getQuestionByID(id)

        set({ currentIndex: newIndex })
        return question
      },

      decreaseIndex: () => {
        const { currentIndex, myQuestions } = get()
        if (currentIndex <= 0) return null

        const newIndex = currentIndex - 1
        const id = myQuestions[newIndex]
        const question = Questions.getQuestionByID(id)

        set({ currentIndex: newIndex })
        return question
      },

      setTime: (currentTime) => {
        set({ time: currentTime })
      },

      resetQuiz: () => {
        set({
          myQuestions: [],
          currentIndex: 0,
          totalCorrect: 0,
          time: 0,
        })
      },
    }),
    {
      name: 'quiz-storage',

      partialize: (state) => ({
        myQuestions: state.myQuestions,
        currentIndex: state.currentIndex,
        totalCorrect: state.totalCorrect,
        time: state.time,
      }),

      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hasHydrated = true
        }
      },
    }
  )
)

export default useQuiz

