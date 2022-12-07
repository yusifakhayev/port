import {useEffect, useState} from 'react'
import {Computer} from './Computer/Computer'
import {Sphere} from './World/Sphere/Sphere'
import {ComputerState} from './Store/ComputerState'

export const Experience = (): JSX.Element => {
    const [reload, setReload] = useState(0)
    const [computerActive, setComputerActive] = useState(true)
    const [sphereActive, setSphereActive] = useState(true)

    useEffect(() => {
        setReload(reload => reload + 1)

        const unsubscribeComputer = ComputerState.subscribe(
            (state) => state.computerState,
            (value) => {
                setComputerActive(computerActive => !computerActive)
            }
        )

        return () => {
            unsubscribeComputer()
        }
    }, [])

    return <>
        {computerActive && <Computer />}
        {sphereActive && <Sphere /> }
    </>
}
