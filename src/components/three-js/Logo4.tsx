"use client"

import React, { useRef,useEffect } from "react";
import { Canvas ,useLoader,useFrame} from "@react-three/fiber";
import { OrbitControls,useGLTF } from "@react-three/drei";
import { TextureLoader, Box3, Vector3 } from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import * as THREE from "three";
import { useTexture } from '@react-three/drei';

export function Logo4({ fbxPath, texturePath }:{ fbxPath:string, texturePath:string }) {
  const group = useRef();

   // Load the FBX model and texture
   // Load the FBX model and texture
   const fbx = useLoader(FBXLoader, fbxPath);
   const texture = useLoader(TextureLoader, texturePath);
   const textureRef = useRef();
   useEffect(() => {
     // Traverse the FBX model and apply the texture to all meshes
     fbx.traverse((child) => {
       if (child.isMesh) {
        if (!child.geometry.attributes.uv) {
            console.warn("The model lacks UV mapping. Texture won't display properly.");
            return;
          }
         // Replace material with MeshStandardMaterial and apply the texture
         child.material = new THREE.MeshStandardMaterial({
            map: texture,
            metalness: 1,
            roughness: 0.1,
            
          });
          texture.wrapS = THREE.RepeatWrapping; // Allow repeating
          texture.wrapT = THREE.RepeatWrapping; // Allow repeating
          textureRef.current = texture; // Save texture for animation
        // child.material.needsUpdate = true;
        // child.castShadow = true;
//child.receiveShadow = true;
       }
     });
 
     // Add the FBX model to the group
     if (group.current) {
       //group.current.add(fbx);
     }
   }, [fbx, texture]);
   useFrame(() => {
    if (textureRef.current) {
        textureRef.current.offset.x += 0.0005; // Slow horizontal movement
        textureRef.current.offset.y += 0.0002; 
    }
  });
  return (<>
  <OrbitControls/>
  <ambientLight intensity={0.5} />
      <directionalLight position={[5, 40, 5]} intensity={1} castShadow />
      <directionalLight position={[-5, 40, -5]} intensity={1}  />
      <directionalLight position={[-12, 40, 5]} intensity={1}  />
      <directionalLight position={[-20, 40, -5]} intensity={1}  />
      <directionalLight position={[20, 40, -5]} intensity={1} />
    
  <group>
      <primitive ref={group} object={fbx}/>
    </group>
  </>
  
);
}