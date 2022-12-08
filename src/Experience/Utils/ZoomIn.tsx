import {a, useSpring} from '@react-spring/three'
import {Vector3} from '@react-three/fiber'

interface ZoomInProps {
    from: number
    to: number
    onRest?: () => void
    children: React.ReactNode
}

export const ZoomIn = ({ from, to, onRest, children }: ZoomInProps) => {
    const { position } = useSpring({
        position: [0, 0, -to],
        from: { position: [0, 0, -from] },
        onRest
    })

    return <a.group position={(position as unknown) as Vector3}>{children}</a.group>
}
