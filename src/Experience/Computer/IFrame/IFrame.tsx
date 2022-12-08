import {useState, useEffect} from 'react'
import {createPortal} from 'react-dom'

export const IFrame = ({children}: {children: any}) => {

    const [ref,setRef] = useState<HTMLIFrameElement>()
    const container = ref?.contentDocument?.body

    useEffect(() => {
    }, [])

    return (
        //@ts-ignore
        <iframe title="iframe" ref={setRef}>
            {container && createPortal(children, container)}
        </iframe>
    )
}
