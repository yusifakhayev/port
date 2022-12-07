import {useEffect, useState} from 'react'
import {Computer} from './Computer/Computer'
import {Sphere} from './World/Sphere'

export const Experience = (): JSX.Element => {
    const [reload, setReload] = useState(0)

    useEffect(() => {
        setReload(reload => reload + 1)
    },[])

    return <>
        <Computer />
        <Sphere />
    </>
}
