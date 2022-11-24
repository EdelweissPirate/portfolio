import { useEffect, useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three'

const CustomModel = ({ scale, position, getModel }) => {
    const ref = useRef();
    const gltf = useLoader(GLTFLoader, '/assets/3d/brain.glb');
    // const [hovered, hover] = useState(false);

    useEffect(() => {
        getModel(ref.current)
        // console.log(ref.current.localToWorld(new THREE.Vector3()));
    
        return () => {
        
        }
    }, [ref])
    

    // Subscribe this component to the render-loop
    // useFrame((state, delta) => {
    //     ref.current.rotation.y += 0.005
    //     // const test = ref.current.getWorldPosition()
    //     // console.log('test: ', ref);
    // });

    return (
        <>
            <primitive
                ref={ref}
                object={gltf.scene}
                position={position}
                scale={scale}
                // onPointerOver={(event) => hover(true)}
                // onPointerOut={(event) => hover(false)}
            />
        </>
    );
};

export default CustomModel;