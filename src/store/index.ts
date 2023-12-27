import { create } from 'zustand'
import { StoreState } from './types'

export const useStore = create<StoreState>((set) => ({
  language: 'en',
  setLanguage: () => set((state: any) => ({ language: state })),
}))