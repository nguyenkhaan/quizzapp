import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type PersonalType = {
  name: string
  setName: (newName: string) => void
  reset: () => void, 
  hasHydrated: boolean 
}

const usePersonal = create<PersonalType>()(
  persist(
    (set) => ({
      name: '',
      hasHydrated: false,

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

      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hasHydrated = true
        }
      },
    }
  )
)
export default usePersonal
