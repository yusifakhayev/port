import create from 'zustand'
import {subscribeWithSelector} from 'zustand/middleware'

interface ComputerState {
    computerState: boolean
    toggleComputerState: () => void
}

export const ComputerState = create<ComputerState>()(subscribeWithSelector((set) => ({
    computerState: true,
    toggleComputerState: () => set((state) => ({computerState: !state.computerState}))
})))
