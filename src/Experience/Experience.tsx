import {useEffect, useState} from 'react'
import {Computer} from './Computer/Computer'
import {Sphere} from './World/Sphere/Sphere'
import {Process} from './World/Process/Process'
import {ComputerState} from './Store/ComputerState'
import {Perf} from 'r3f-perf'

export const Experience = (): JSX.Element => {
    const [reload, setReload] = useState(0)

    const [computerActive, setComputerActive] = useState(true)
    const [sphereActive, setSphereActive] = useState(false)
    const [processActive, setProcessActive] = useState(false)


    useEffect(() => {
        setReload(reload => reload + 1)

        const unsubscribeComputer = ComputerState.subscribe(
            (state) => state.computerState,
            (value) => {
                switch (value) {
                    case "Sphere":
                        setSphereActive(sphereActive => !sphereActive)
                        break
                    case "SphereOut":
                        setSphereActive(sphereActive => !sphereActive)
                        break
                    case "Process":
                        setProcessActive(processActive => !processActive)
                        break
                    case "ProcessOut":
                        setProcessActive(processActive => !processActive)
                        break
                }
                setComputerActive(computerActive => !computerActive)
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
        {processActive && <Process /> }
        <Perf/>
    </>
}
