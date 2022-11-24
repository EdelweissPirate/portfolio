import {
    EffectComposer,
    DepthOfField,
    ColorDepth,
    SelectiveBloom,
    Bloom,
    Noise,
    Vignette,
} from "@react-three/postprocessing";


function SFX() {
    return (
        <EffectComposer multisampling={0} disableNormalPass={true}>
            <DepthOfField
            focusDistance={0}
            focalLength={0.5}
            bokehScale={2}
            height={480}
            />
            {/* <Bloom
            lights={[]}
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
            height={300}
            opacity={3}
            /> */}
            <ColorDepth />
            <Noise opacity={0.6} />
            <Vignette eskil={true} offset={0.4} darkness={1} />
        </EffectComposer>
    )
}

export default SFX