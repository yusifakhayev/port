import {useState} from 'react'
import {createPortal} from 'react-dom'

export const IFrame = ({children}: {children: any}) => {
    const [ref,setRef] = useState<HTMLIFrameElement>()
    const container = ref?.contentDocument?.body

    return (
        //@ts-ignore
        <iframe title="iframe" ref={setRef} className='bg-black'>
            {container && createPortal(children, container)}
        </iframe>
    )
}
