"use client"

import React, { useRef,useEffect } from "react";
import { Canvas ,useLoader,useFrame} from "@react-three/fiber";
import { OrbitControls,useGLTF } from "@react-three/drei";
import { TextureLoader, Box3, Vector3 } from "three";
import * as THREE from "three";

export function Logo2({ fbxPath, texturePath }:{ fbxPath:string, texturePath:string }) {
  const group = useRef();

  const { scene } = useGLTF(fbxPath); // Load the GLTF model
  const texture = useLoader(TextureLoader, texturePath); // Load the texture

  useEffect(() => {
    // Traverse the scene and apply the texture to meshes
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.map = texture; // Assign the texture
        child.material.needsUpdate = true; // Ensure material updates
      }
    });
  }, [scene, texture]);

//   useFrame(({ clock }) => {
//     const time = clock.getElapsedTime();
//     texture.offset.x = (time * 0.1) % 1; // Horizontal movement
//     texture.offset.y = (time * 0.05) % 1; // Vertical movement
//   });

  return (<>
  <OrbitControls/>
  <ambientLight intensity={0.5} />
  <directionalLight position={[5, 5, 5]} />
  <primitive ref={group} object={scene} /></>
);
}