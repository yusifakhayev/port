import {useEffect, useState} from 'react'
import {ComputerState} from '../../Store/ComputerState'

export const IFrameContent = () => {
    const toggleComputerState = ComputerState((state) => state.toggleComputerState)

    useEffect(() => {
    },[])

    return (
        <div className='text-red-200'>
            <h1 className='text-red-200' onClick={toggleComputerState}>just testing</h1>
            <p></p>
            <p></p>
        </div>
     )
}
