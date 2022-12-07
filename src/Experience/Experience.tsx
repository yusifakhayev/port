import {useEffect, useState} from 'react'
import {Computer} from './Computer/Computer'
import {Sphere} from './World/Sphere/Sphere'
import {ComputerState} from './Store/ComputerState'
import {Perf} from 'r3f-perf'

export const Experience = (): JSX.Element => {
    const [reload, setReload] = useState(0)
    const [computerActive, setComputerActive] = useState(true)
    const [sphereActive, setSphereActive] = useState(false)

    useEffect(() => {
        setReload(reload => reload + 1)

        const unsubscribeComputer = ComputerState.subscribe(
            (state) => state.computerState,
            () => {
                setComputerActive(computerActive => !computerActive)
                setSphereActive(sphereActive => !sphereActive)
            }
        )

        return () => {
            setReload(reload => reload + 1)
            unsubscribeComputer()
        }
    }, [])

    return <>
        {computerActive && <Computer />}
        {sphereActive && <Sphere /> }
        <Perf/>
    </>
}
