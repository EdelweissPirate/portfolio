import { useMemo, useState } from "react";
import * as THREE from "three";

import SFX from "./SFX";
// import Star from "./Star";

const Star = ({ position, color, isClicked }) => {
    const [hover, setHover] = useState(false)
    
    const handleHover = (bool) => {
        if(window.innerWidth > 900){
            setHover(bool)
            if(bool){
                document.body.style.cursor = 'pointer';
            } else {
                document.body.style.cursor = 'default';
            }
        }
    }

    const handleClick = () => {
        if(window.innerWidth > 900){
            isClicked(true)
        }
    }

    return (
        <mesh 
            position={position} 
            onPointerOver={() => handleHover(true)} 
            onPointerOut={() => handleHover(false)}
            onPointerDown={handleClick}
            scale={hover ? 1.2 : 0.5}
        >
            <sphereGeometry attach="geometry" args={[0.3]} />
            <meshBasicMaterial attach="material" color={color} />
        </mesh>
    );
};

function Stars({ isClicked }) {
    const addStar = (count) => {
        const objects = []

        for (let i = 0; i < count; i++) {
            const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ))

            objects.push(<Star key={'Star ' + x + y + z} position={[x, y, z]} color={'yellow'} isClicked={isClicked} />)
        }

        return [...objects]
    }

    const _stars = useMemo(() => addStar(200), [200])

    return (
        <>
            {_stars}
            <SFX />
        </>
    )
}

export default Stars