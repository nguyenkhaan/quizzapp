import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type PersonalType = {
  name: string
  setName: (newName: string) => void
  reset: () => void
}

const usePersonal = create<PersonalType>()(
  persist(
    (set) => ({
      name: '',

      setName: (newName) =>
        set({
          name: newName,
        }),

      reset: () =>
        set({
          name: '',
        }),
    }),
    {
      name: 'personal-storage',  
 
      partialize: (state) => ({
        name: state.name,
      }),
    }
  )
)

export default usePersonal
