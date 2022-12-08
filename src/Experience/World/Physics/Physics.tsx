import {InstancedRigidBodyApi, InstancedRigidBodies, Attractor, RigidBody, Physics} from '@react-three/rapier'
import {Text, Center, useGLTF, OrbitControls, Environment, Cloud} from '@react-three/drei'
import {ComputerState} from '../../Store/ComputerState'
import {useState, useEffect, useRef} from 'react'

const sphereCount = 100

export const Attractors = (): JSX.Element => {

    const [attractionActive1, setAttraction1Active] = useState(true)
    const [attractionActive2, setAttraction2Active] = useState(true)

    const toggleComputerState = ComputerState((state) => state.toggleComputerState)

    const instanced = useRef<InstancedRigidBodyApi>(null)

    const macbook = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf")

    const ToggleAttraction1Active = () => {
        setAttraction1Active(attractionActive1 => !attractionActive1)
    }
    const ToggleAttraction2Active = () => {
        setAttraction2Active(attractionActive2 => !attractionActive2)
    }

    useEffect(() => {
    },[])

    return <>
        <OrbitControls autoRotate/>
        <Environment preset='dawn' background blur={0.75} />
        <Cloud />
        <Physics
            gravity={[0, -9.82, 0]}
        >
            <InstancedRigidBodies
                ref={instanced}
                positions={Array.from({length: sphereCount}, (_, i) => [
                Math.floor(i / 30) * 1,
                (i % 30) * 0.5,
                0
                ])}
                colliders={'ball'}
            >
                <instancedMesh
                    args={[undefined, undefined, sphereCount]}
                >
                    <sphereGeometry />
                    <meshStandardMaterial />
                </instancedMesh>
            </InstancedRigidBodies>
            <RigidBody
                type='fixed'
                >
                <Center>
                    <Text
                        onClick={() => {toggleComputerState('PhysicsOut')}}
                    >
                        return
                        <meshNormalMaterial/>
                    </Text>
                </Center>
            </RigidBody>

            <RigidBody
                colliders={'hull'}
            >
                <primitive object={macbook.scene} position={[1,2,3]}/>
            </RigidBody>

            <RigidBody
                position={[5, 5, 0]}
                type='fixed'
            >
                <Center>
                    <Text
                        onClick={ToggleAttraction1Active}
                    >
                        {attractionActive1 ? 'on' : 'off' }
                        <meshNormalMaterial />
                    </Text>
                </Center>
                {attractionActive1 ? <Attractor type='linear' strength={8} /> : null}
            </RigidBody>

            <RigidBody
                position={[-5, 5, 0]}
                type='fixed'
            >
                <Center>
                    <Text
                        onClick={ToggleAttraction2Active}
                    >
                        {attractionActive2 ? 'on' : 'off' }
                        <meshNormalMaterial />
                    </Text>
                </Center>
                {attractionActive2 ? <Attractor type='linear' strength={8} /> : null}
            </RigidBody>
            {attractionActive1 ? <Attractor type='linear' strength={10} position={[10,5,0]} /> : null}
            {attractionActive2 ? <Attractor type='linear' strength={10} position={[-10,5,0]} /> : null}
            {attractionActive2 || attractionActive1 ? <Attractor type='linear' strength={10} position={[0,10,0]} /> : null}
            {attractionActive2 || attractionActive1 ? <Attractor type='linear' strength={15} position={[0,-10,0]} /> : null}
            {attractionActive2 || attractionActive1 ? <Attractor type='linear' strength={-3} /> : null}

        </Physics>
    </>
}
