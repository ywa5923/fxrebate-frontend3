"use client"

import React, { useRef,useEffect } from "react";
import { Canvas ,useLoader,useFrame} from "@react-three/fiber";
import { OrbitControls,useGLTF } from "@react-three/drei";
import { TextureLoader, Box3, Vector3 } from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import * as THREE from "three";

export function Logo({ fbxPath, texturePath }:{ fbxPath:string, texturePath:string }) {
  const group = useRef();

  // Load the FBX model
  const fbx = useLoader(FBXLoader, fbxPath);

  // Load the texture
  const texture = useLoader(TextureLoader, texturePath);

  // Apply the texture to the FBX model
  useEffect(() => {
    if (fbx) {
      // Compute the bounding box of the model
      const box = new Box3().setFromObject(fbx);
      const size = new Vector3();
      box.getSize(size); // Gets the size as {x, y, z}

      // Scale the texture to fit the bounding box
      texture.repeat.set(1 / 0.5*size.x, 1 / 0.5*size.y);
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

      // Apply the texture to all meshes
      fbx.traverse((child) => {
        if (child.isMesh) {
         // child.material.map = texture;
         child.material = new THREE.MeshStandardMaterial({
            map: texture,
            metalness: 0.5,
            roughness: 0.5,
          });
          child.material.needsUpdate = true;
        }
      });
    }
  }, [fbx, texture]);
  console.log(fbx)

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    texture.offset.x = (time * 0.1) % 1; // Horizontal movement
    texture.offset.y = (time * 0.05) % 1; // Vertical movement
  });

  return (<>
  <OrbitControls/>
  <ambientLight intensity={0.5} />
  <directionalLight position={[5, 5, 5]} />
  <primitive ref={group} object={fbx} /></>
);
}