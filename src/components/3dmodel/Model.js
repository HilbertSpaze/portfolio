import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three'

const GltfModel = ({ modelPath, scale = 110, position = [-0 ,-30, 0] }) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);
  const [hovered, hover] = useState(false);
      // Here's the animation part
    // ************************* 
let mixer
if (gltf.animations.length) {
    mixer = new THREE.AnimationMixer(gltf.scene);
    gltf.animations.forEach(clip => {
        const action = mixer.clipAction(clip)
        action.play();
    });
}

  // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (ref.current.rotation.y += 0.003));
useFrame((state, delta) => {
    mixer?.update(delta)
})

// gltf.scene.traverse(child => {
//     if (child.isMesh) {
//         child.castShadow = true
//         child.receiveShadow = true
//         child.material.side = THREE.FrontSide
//     }
// })
  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        position={position}
        scale={3}

      />
    </>
  );
};

export default GltfModel;