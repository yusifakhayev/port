import * as THREE from 'three'
import {Mesh} from 'three'
//@ts-ignore
import vertexShader from './shaders/vertex.glsl'; import fragmentShader from './shaders/fragment.glsl'
import {useMemo, useEffect, useRef, useState} from 'react'
import {useFrame} from '@react-three/fiber'
import {meshBounds, Text, PresentationControls} from '@react-three/drei'
import {a, useSpring} from '@react-spring/three'
import {ComputerState} from '../../Store/ComputerState'
/* import {useControls} from 'leva' */

export const Sphere = (): JSX.Element => {

    const [clicked, click] = useState(false)
    const toggleComputerState = ComputerState((state) => state.toggleComputerState)
    const profiles = [
        {aDistStr: 4.52, aDistFreq: 1.09, aDispStr: 0.18, aDispFreq: 1.41},
        {aDistStr: 10.00, aDistFreq: 0.66, aDispStr: 0.34, aDispFreq: 0.20},
        {aDistStr: 0.39, aDistFreq: 5.60, aDispStr: 0.24, aDispFreq: 10.00},
    ]
    const molSpringConf = useMemo(() => {
        return {
            friction: 280,
            mass: 1,
            tension: 200,
            duration: 1000,
            precision: 0.1,
            velocity: 0
        }
    }, [])

    const lPosSpringConf = useMemo(() => {
        return {
            friction: 280,
            mass: 1,
            tension: 200,
            duration: 2000,
            precision: 0.1,
            velocity: 0
        }
    },[])

    const randomProfile = useMemo(() => {
        return Math.floor(Math.random() * profiles.length)
    },[clicked])

    const {scale} = useSpring({
        scale: clicked ? 1.2 : 1.0,
        config: molSpringConf
    })
    const {alightAIntensity} = useSpring({
        alightAIntensity: clicked ? Math.random() : 0.5,
        config:  lPosSpringConf
    })
    const {alightBIntensity} = useSpring({
        alightBIntensity: clicked ? Math.random() : 0.5,
        config:  lPosSpringConf
    })

    const {alightAPositionX} = useSpring({
        alightAPositionX: clicked ? Math.random() * 2 : 1,
        config:  lPosSpringConf
    })
    const {alightAPositionY} = useSpring({
        alightAPositionY: clicked ? Math.random() * 2 : 1,
        config:  lPosSpringConf
    })
    const {alightAPositionZ} = useSpring({
        alightAPositionZ: clicked ? Math.random() * 2 : 0,
        config:  lPosSpringConf
    })
    const {alightBPositionX} = useSpring({
        alightBPositionX: clicked ? Math.random() * 2 : -1,
        config:  lPosSpringConf
    })
    const {alightBPositionY} = useSpring({
        alightBPositionY: clicked ? Math.random() * 2 : -1,
        config:  lPosSpringConf
    })
    const {alightBPositionZ} = useSpring({
        alightBPositionZ: clicked ? Math.random() * 2 : 0,
        config:  lPosSpringConf
    })

    const {aColMultA} = useSpring({
        aColMultA: clicked ? Math.random() : 0.74,
        config:  molSpringConf
    })
    const {aColMultB} = useSpring({
        aColMultB: clicked ? Math.random() : 0.14,
        config:  molSpringConf
    })
    const {aDistStr} = useSpring({
        aDistStr: clicked ? profiles[randomProfile].aDistStr : 2.35,
        config:  molSpringConf
    })
    const {aDistFreq} = useSpring({
        aDistFreq: clicked ? profiles[randomProfile].aDistFreq  : 1.02,
        config:  molSpringConf
    })
    const {aDispStr} = useSpring({
        aDispStr: clicked ? profiles[randomProfile].aDispStr : 0.2,
        config:  molSpringConf
    })
    const {aDispFreq} = useSpring({
        aDispFreq: clicked ? profiles[randomProfile].aDispFreq  : 0.2,
        config:  molSpringConf
    })

    const memoSphere = useRef<Mesh>(null!)
    const uniforms = useMemo(() => {
        return {
            uTime:     {value: 0    },
            uDispFreq: {value: 8.5  },
            uDispStr:  {value: 0.3  },
            uDistFreq: {value: 1.2  },
            uDistStr:  {value: 0.2  },
            uTimeFreq: {value: 0.1 },
            uColMultA: {value: 0.5  },
            uColMultB: {value: 0.5  },

            ulightAColor: {value: new THREE.Color('#ff0000')},
            ulightAPosition: {value: new THREE.Vector3(1.0,1.0,0.0)},
            ulightAIntensity: {value: 1},
            ulightBColor: {value: new THREE.Color('#0000ff')},
            ulightBPosition: {value: new THREE.Vector3(-1.0,-1.0,0.0)},
            ulightBIntensity: {value: 1},
        }
    },[])


    useFrame((state, delta) => {
        uniforms.uTime.value += delta * 0.5
    })
    useEffect(() => {
    },[])

    return <>
        <color args={['#000000']} attach='background'/>
        <PresentationControls
            global
            rotation={[0.13, 0.1, 0 ]}
            polar={[-0.4, 0.2]}
            azimuth={[-1, 0.75]}
            config={{mass: 2, tension: 400}}
            snap={{mass: 4, tension: 400}}
        >
            <a.mesh
                ref={memoSphere}
                raycast={meshBounds}
                onClick={() => {click(clicked => !clicked)}}
                onDoubleClick={() => toggleComputerState()}
                scale={scale}
            >
                <sphereGeometry
                    args={[1, 512, 512]}
                />
                {/* @ts-ignore */}
                <a.shaderMaterial
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                    uniforms={uniforms}
                    uniforms-uDistStr-value={aDistStr}
                    uniforms-uDistFreq-value={aDistFreq}
                    uniforms-uDispStr-value={aDispStr}
                    uniforms-uDispFreq-value={aDispFreq}
                    uniforms-uColMultA-value={aColMultA}
                    uniforms-uColMultB-value={aColMultB}

                    uniforms-ulightAIntensity-value={alightAIntensity}
                    uniforms-ulightBIntensity-value={alightBIntensity}

                    uniforms-ulightAPosition-value-x={alightAPositionX}
                    uniforms-ulightAPosition-value-y={alightAPositionY}
                    uniforms-ulightAPosition-value-z={alightAPositionZ}

                    uniforms-ulightBPosition-value-x={alightBPositionX}
                    uniforms-ulightBPosition-value-y={alightBPositionY}
                    uniforms-ulightBPosition-value-z={alightBPositionZ}

                />
            </a.mesh>
        </PresentationControls>

    </>
}




    /* const {uColMultA, uColMultB} = useControls('cMult', { */
    /*     uColMultA: { value: 0.74, min: 0, max: 2, onChange: (v: number) => { memoSphere.current.material.uniforms.uColMultA.value = v }}, */
    /*     uColMultB: { value: 0.14, min: 0, max: 2, onChange: (v: number) => { memoSphere.current.material.uniforms.uColMultB.value = v }}, */
    /* }) */
    /**/
    /* const {uDispFreq, uDispStr, uDistFreq, uDistStr} = useControls('breathe', { */
    /*     uDispFreq: {value: 0.2, min: 0, max: 10, step: 0.001, onChange: (v: number) => {memoSphere.current.material.uniforms.uDispFreq.value = v}}, */
    /*     uDispStr: {value: 0.2, min: 0, max: 1, step: 0.001, onChange: (v: number) => {memoSphere.current.material.uniforms.uDispStr.value = v}}, */
    /*     uDistFreq: {value: 1.03, min: 0, max: 10, step: 0.001, onChange: (v: number) => {memoSphere.current.material.uniforms.uDistFreq.value = v}}, */
    /*     uDistStr: {value: 2.35, min: 0, max: 10, step: 0.001, onChange: (v: number) => {memoSphere.current.material.uniforms.uDistStr.value = v}}, */
    /* }) */
    /**/
    /* const {ulightAIntensity, ulightAPosition, ulightAColor, ulightBIntensity, ulightBPosition, ulightBColor} = useControls('color', { */
    /*     ulightAPositionX: { value: 1, min: -2, max: 2, step: 0.00001, onChange: (v: number) => { memoSphere.current.material.uniforms.ulightAPosition.value.x = v } }, */
    /*     ulightAPositionY: { value: 1, min: -2, max: 2, step: 0.00001, onChange: (v: number) => { memoSphere.current.material.uniforms.ulightAPosition.value.y = v } }, */
    /*     ulightAPositionZ: { value: 0, min: -2, max: 2, step: 0.00001, onChange: (v: number) => { memoSphere.current.material.uniforms.ulightAPosition.value.z = v } }, */
    /*     ulightAIntensity: { value: 0.5, min: -2, max: 2, step: 0.00001, onChange: (v: number) => { memoSphere.current.material.uniforms.ulightAIntensity.value = v } }, */
    /*     ulightBPositionX: { value: -1, min: -2, max: 2, step: 0.00001, onChange: (v: number) => { memoSphere.current.material.uniforms.ulightBPosition.value.x = v } }, */
    /*     ulightBPositionY: { value: -1, min: -2, max: 2, step: 0.00001, onChange: (v: number) => { memoSphere.current.material.uniforms.ulightBPosition.value.y = v } }, */
    /*     ulightBPositionZ: { value: 0, min: -2, max: 2, step: 0.00001, onChange: (v: number) => { memoSphere.current.material.uniforms.ulightBPosition.value.z = v } }, */
    /*     ulightBIntensity: { value: 0.5, min: -2, max: 2, step: 0.00001, onChange: (v: number) => { memoSphere.current.material.uniforms.ulightBIntensity.value = v } }, */
    /* }) */

