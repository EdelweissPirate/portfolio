import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from 'react'
import * as THREE from "three";

import CustomModel from './CustomModel'
import CameraController from "./CameraController";
import Stars from "./Stars";
import Model from "./UFO";

function CustomCanvas({ isClicked }) {
    const [targetModel, setTargetModel] = useState(null)

    const addUFO = () => {
        let [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 15 ))

        const chance = Math.random()
        let direction

        if(chance > .5){
            direction = 'clockwise'
        } else {
            direction = 'anti-clockwise'
        }

        const radius = 6 + (Math.random() * 4)

        return <Model 
            key={'UFO ' + x + y + z}
            position={[x, y, z]}
            scale={.2}
            direction={direction} 
            radius={radius} 
            speed={Math.random()} 
            attackTarget={targetModel}/>
    }

    const getTargetModel = (arg) => {
        setTargetModel(arg)
    }

    return (
        <Suspense fallback={'Loading Three.js'}>
            <Canvas
                gl={{
                powerPreference: "high-performance",
                antialias: true,
                stencil: false,
                depth: false
                }} 
                camera={{
                    position: [5, 7, 10], 
                    zoom: window.innerWidth > 900 ? .8 : .4 
                }}
            >
                <CameraController />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />

                <Stars isClicked={isClicked} />
                
                <CustomModel position={[0, -6, 0]} scale={6} getModel={getTargetModel}/>
                
                {Array(6).fill().map(() => {
                    return addUFO()
                })}
                <gridHelper args={[100, 100]} />
            </Canvas>
        </Suspense>
    )
}

export default CustomCanvas