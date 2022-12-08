import {useGLTF, Environment, Float, PresentationControls, ContactShadows, Html, Text} from '@react-three/drei'
import {IFrame} from './IFrame/IFrame'
import {IFrameContent} from './IFrame/IFrameContent'
import {useThree} from '@react-three/fiber'
import {useEffect, useState} from 'react'
import {useControls} from 'leva'
import {useSpring, a, config} from '@react-spring/three'

/* const deg2rad = degrees => degrees * (Math.PI / 180); */


export const Computer = (): JSX.Element => {

    const macbook = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    const [reload, setReload] = useState(0)
    const [cameraZoom, setCameraZoom] = useState(false)


    useEffect(() => {
        setReload(reload => reload + 1)
    },[])

    {/* -2.2, -1.2 -> -0.5, 3.2 */}

    const { position } = useSpring({
        position: cameraZoom ? [-2.2, -0.5, 3.2] : [0, -1.2, 0],
        config: config.molasses
    })


    /* const {position, scale} = useControls('computer', { */
    /*     position: { */
    /*         value: [0,0,0], */
    /*         min: -10, */
    /*         max: 10 */
    /*     }, */
    /*     scale: { */
    /*         value: 1 */
    /*     } */
    /* }) */

    return <>
         <Environment
             preset='city'
         />
        <color args={['#2A1B0E']} attach='background'/>

         <PresentationControls
             global
             rotation={[0.13, 0.1, 0 ]}
             polar={[-0.4, 0.2]}
             azimuth={[-1, 0.75]}
             config={{mass: 2, tension: 400}}
             snap={{mass: 4, tension: 400}}
         >
             <Float
                 rotationIntensity={0.4}
             >
                 <rectAreaLight
                     width={ 2.5 }
                     height={ 1.65 }
                     intensity={ 65 }
                     color={ '#001289' }
                     rotation={ [ - 0.1, Math.PI, 0 ] }
                     position={ [ 0, 0.55, - 1.15 ] }
                 />

                 <mesh
                    visible={false}
                    scale={[3, 2.5, 3]}
                    rotation-x={-0.256}
                    onPointerEnter={() => setCameraZoom(cameraZoom => !cameraZoom)}
                    onPointerOut={() => setCameraZoom(cameraZoom => !cameraZoom)}
                 >
                     <planeGeometry/>
                     <meshBasicMaterial/>
                 </mesh>

                 {/* @ts-ignore */}
                 <a.primitive
                     object={macbook.scene}
                     position-y={- 1.2}
                     position={position}
                 >
                     <Html
                         transform
                         wrapperClass='htmlScreen'
                         distanceFactor={1.17}
                         position={[0, 1.56, -1.4 ]}
                         rotation-x={-0.256}
                     >
                         <IFrame >
                             <IFrameContent />
                         </IFrame >
                     </Html>
                 </a.primitive>
                 <Text
                     fontSize={1}
                     position={[2,0.75,0.75]}
                     rotation-y={- 1.25}
                 >yuska</Text>
             </Float>
         </PresentationControls>
         <ContactShadows
             position-y={- 1.4}
             opacity={0.4}
             scale={5}
             blur={2.4}
         />
    </>
}

