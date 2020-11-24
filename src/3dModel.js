import React, { useRef, useState, Suspense } from 'react';
import './App.scss';

import { Canvas, useFrame } from "react-three-fiber";
import { useSpring, a } from 'react-spring/three';

import { softShadows, MeshWobbleMaterial, useGLTFLoader, Html } from 'drei';
import Home from './Home'
import GoldenRatio from './GoldenRatio'
import Menu from './Clickable'

softShadows();

// eslint-disable-next-line
const SpinningMesh = ({ position, color, args, speed }) =>
{
    const mesh = useRef(null);
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

    const [expand, setExpand] = useState(false);

    const props = useSpring(
        {
            scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1]
        });
    return (
        <a.mesh
            onClick={() => setExpand(!expand)}
            scale={props.scale}
            castShadow
            position={position}
            ref={mesh}>
            <boxBufferGeometry attach='geometry' args={args} />
            <MeshWobbleMaterial attach='material' color={color} speed={speed} factor={0.6} />
        </a.mesh>
    );
}

const Lights = () =>
{
    return (
        <>
            <ambientLight intensity={.3} />
            <directionalLight
                castShadow
                position={[0, 10, 0]}
                intensity={1}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            // shadow={{
            //   mapSize: [1024, 1024],
            //   camera: { far: 50, top: 10, bottom: -10, left: -10, right: 10 }
            // }}
            />
            <pointLight position={[-10, 0, -20]} intensity={0.5} />
            <pointLight position={[0, -10, 0]} intensity={1.5} />
        </>
    );
};

const Laptop = () =>
{
    const gltf = useGLTFLoader('/models/scene.gltf', true);
    return (
        <primitive object={gltf.scene} dispose={null} />
    );

}

const HTMLContent = () =>
{
    const [active, setActive] = useState(false);
    const { ...props } = useSpring({
        position: active ? [0, -6, 3] : [0, -2, 0],
        rotation: active ? [Math.PI / 15, Math.PI * 1.5, 0] : [0, -Math.PI / 2, 0],
        scale: active ? [4, 4, 4] : [1, 1, 1],
        config: { mass: 5, tension: 300, friction: 100, precision: 0.0001 }
    });
    // const rotation = spring.to([0, 1], [0, Math.PI]);

    const ref = useRef();
    // useFrame(() => (ref.current.rotation.y += 0.01));
    return (
        <group>
            <a.mesh {...props} ref={ref} onClick={() => setActive(true)}>
                <Laptop />
            </a.mesh>
            <Html fullscreen >
                <div className='container'>
                    <h1>Hello</h1>
                </div>
            </Html >
        </group>

    );
};

  // return (
  //   <Canvas
  //     shadowMap
  //     colorManagement
  //   // camera={{ position: [0, 0, 0], fov: 60 }}
  //   >
  //     <Lights />
  //     <group>
  //       <mesh
  //         receiveShadow
  //         rotation={[-Math.PI / 2, 0, 0]}
  //         position={[0, 0, 0]}>
  //         <planeBufferGeometry attach='geometry' args={[100, 100]} />
  //         <shadowMaterial attach='material' opacity={0.3} />
  //       </mesh>
  //     </group>
  //     {/* <SpinningMesh position={[0, 1, 0]} args={[3, 2, 1]} color='blue' speed={1} />
  //     <SpinningMesh position={[-2, 1, -5]} color='pink' speed={2} />
  //     <SpinningMesh position={[5, 1, -2]} color='pink' speed={2} /> */}
  //     <Suspense fallback={null}>
  //       <HTMLContent />
  //     </Suspense>


  //     {/* <OrbitControls /> */}

  //   </Canvas>
  // )