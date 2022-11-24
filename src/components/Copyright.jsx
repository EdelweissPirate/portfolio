import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import Logo from "./Logo"
import SFX from "./SFX";

function Copyright() {
    return (
        <Suspense>
            <div style={{width: '100%'}}>
                <Canvas
                    gl={{
                    antialias: true,
                    stencil: false,
                    depth: false,
                    }} 
                >
                    <ambientLight intensity={1} />
                    <pointLight position={[10, 10, 10]} />

                    <Logo />
                    <SFX />
                </Canvas>
            </div>
            {/* <h5>Copyright © Joshua Evans 2022</h5> */}
        </Suspense>
    )
}

export default Copyright