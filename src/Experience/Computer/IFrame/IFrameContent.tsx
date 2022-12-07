import {useEffect, useState} from 'react'
import {ComputerState} from '../../Store/ComputerState'

export const IFrameContent = () => {
    const toggleComputerState = ComputerState((state) => state.toggleComputerState)

    useEffect(() => {
    },[])

    return (
        <div className='bg-black'>
            <h1 className='text-3xl bg-black' onClick={toggleComputerState}>just testing</h1>
            <p></p>
            <p></p>
        </div>
    )
}
