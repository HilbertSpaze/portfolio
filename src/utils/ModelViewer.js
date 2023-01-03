import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "../components/3dmodel/Model";


const ModelViewer = ({ modelPath, position = [0, 0, 0] }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.25} penumbra={0.1} />
        <directionalLight/>
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} position={position} />
        <OrbitControls enableZoom={false} enableRotate={false}/>
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;