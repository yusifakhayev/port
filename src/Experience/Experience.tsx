import {useEffect, useState} from 'react'
import {Computer} from './Computer/Computer'
import {Sphere} from './World/Sphere/Sphere'
import {Process} from './World/Process/Process'
import {Attractors} from './World/Physics/Physics'
import {ComputerState} from './Store/ComputerState'

export const Experience = (): JSX.Element => {
    const [reload, setReload] = useState(0)

    const [computerActive, setComputerActive] = useState(true)
    const [sphereActive, setSphereActive] = useState(false)
    const [processActive, setProcessActive] = useState(false)
    const [physicsActive, setPhysicsActive] = useState(false)


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
                    case "Physics":
                        setPhysicsActive(physicsActive => !physicsActive)
                        break
                    case "PhysicsOut":
                        setPhysicsActive(physicsActive => !physicsActive)
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
        {sphereActive && <Sphere />}
        {processActive && <Process />}
        {physicsActive && <Attractors />}
    </>
}
