import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function Logo() {
    const mesh = useRef()
    const texture = useTexture('assets/images/logo.png')

    useFrame(() => {
        mesh.current.rotation.z += 0.01
        mesh.current.rotation.x += 0.01
        mesh.current.rotation.y -= 0.01
    })

    const handleHover = (bool) => {
        if(bool){
            document.body.style.cursor = 'pointer';
        } else {
            document.body.style.cursor = 'default';
        }
    }

    const handleClick = () => {
        window.open('https://www.github.com/EdelweissPirate', '_blank')
    }

    return (
        <mesh
            position={[0, 0, 0]}
            rotation={[1.5, 1.6, 0]}
            ref={mesh}
            scale={.125}
            onPointerDown={handleClick}
            onPointerEnter={() => handleHover(true)}
            onPointerLeave={() => handleHover(false)}
            >
            <cylinderGeometry args={[7.5, 7.5, 1, 64, 4]} attach="geometry" />
            <meshStandardMaterial map={texture} attach="material" color="#CCCCCC" />
        </mesh>
    )
}

export default Logo