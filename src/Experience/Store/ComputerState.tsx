import create from 'zustand'
import {subscribeWithSelector} from 'zustand/middleware'

interface ComputerState {
    computerState: string
    toggleComputerState: (by: string) => void
}

export const ComputerState = create<ComputerState>()(subscribeWithSelector((set) => ({
    computerState: '',
    toggleComputerState: (by: string) => set(() => ({computerState: by}))
})))
