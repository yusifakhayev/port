import React from 'react'
import ReactDOM from 'react-dom/client'
import {Experience} from './Experience/Experience'
import {Canvas} from '@react-three/fiber'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Canvas>
        <Experience />
    </Canvas>
  </React.StrictMode>
)
