import {ComputerState} from '../../Store/ComputerState'
export const Sphere = (): JSX.Element => {
    const toggleComputerState = ComputerState((state) => state.toggleComputerState)

    return <>
        <mesh
            onClick={toggleComputerState}
        >
            <sphereGeometry/>
            <meshBasicMaterial/>
        </mesh>
    </>
}
