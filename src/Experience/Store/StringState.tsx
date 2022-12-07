import create from 'zustand'
import {subscribeWithSelector} from 'zustand/middleware'

interface StringState {
    stringState: string
    setStringState: (by: string) => void
}

export const StringState = create<StringState>()(subscribeWithSelector((set) => ({
    stringState: '',
    setStringState: (by: string) => set(() => ({stringState: by}))
})))

