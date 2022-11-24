import * as THREE from 'three'
import { useLayoutEffect, useRef } from 'react'

function Line({ start, end }) {
    const ref = useRef()
        useLayoutEffect(() => {
        ref.current.geometry.setFromPoints([start, end].map((point) => new THREE.Vector3(...point)))
    }, [start, end])

    return (
        <line ref={ref}>
        <bufferGeometry />
        <lineBasicMaterial color="hotpink" />
        </line>
    )
}