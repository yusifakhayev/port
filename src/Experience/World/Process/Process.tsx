import { useEffect } from 'react'
import * as THREE from 'three'
import { useSprings, a } from '@react-spring/three'
import {PresentationControls} from '@react-three/drei'


const number = 25
const colors = ['#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff', 'lightpink', 'lightblue']
const random = (i: number) => {
  const r = Math.random()
  return {
    position: [100 - Math.random() * 200, 100 - Math.random() * 200, i * 1.5],
    color: colors[Math.floor(Math.random() * colors.length )],
    scale: [1 + r * 14, 1 + r * 14, 1],
    rotation: [0, 0, THREE.MathUtils.degToRad(Math.round(Math.random()) * 45)]
  }
}

const data = new Array(number).fill(null).map(() => {
  return {
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    args: [0.1 + Math.random() * 9, 0.1 + Math.random() * 9, 10]
  }
})

export const Process = (): JSX.Element =>  {
  const [springs, api] = useSprings(number, (i) => ({
    from: random(i),
    ...random(i),
    config: { mass: 20, tension: 150, friction: 50 }
  }))

  useEffect(() => void setInterval(() => api.start((i) => ({ ...random(i), delay: i * 40 })), 3000), [])
  return (
    <>
      <ambientLight intensity={2.5} />
      <directionalLight intensity={2.5} />
      <color args={['#000000']} attach='background'/>

    <PresentationControls
            global
            rotation={[0.13, 0.1, 0 ]}
            polar={[-0.4, 0.2]}
            azimuth={[-1, 0.75]}
            config={{mass: 2, tension: 400}}
            snap={{mass: 4, tension: 400}}
        >

      <group
        position-z={-105}
      >
          {data.map((d, index) => (
            <a.mesh key={index} {...springs[index]} castShadow receiveShadow>
                {/* @ts-ignore */}
              <boxGeometry attach="geometry" args={d.args} />
                {/* @ts-ignore */}
              <a.meshPhysicalMaterial attach="material" color={springs[index].color} roughness={0.75} metalness={0.5} />
            </a.mesh>
          ))}
      </group>
    </PresentationControls>
    </>
  )
}

