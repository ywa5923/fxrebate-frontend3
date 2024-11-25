"use client"

import React, { useRef,useEffect,useState,MutableRefObject } from "react";
import { Canvas ,useLoader,useFrame} from "@react-three/fiber";
import { OrbitControls,useGLTF } from "@react-three/drei";
import { TextureLoader, Box3, Vector3 } from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import * as THREE from "three";
import { Texture } from 'three';

export function Logo5({ fbxPath, texturePath }:{ fbxPath:string, texturePath:string }) {
  const group = useRef<THREE.Group>(null);

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

   // Load the FBX model and texture
   const fbx = useLoader(FBXLoader, fbxPath);
   const texture = useLoader(TextureLoader, texturePath);
   const textureRef  = useRef<Texture | null>(null);
   useEffect(() => {
     // Traverse the FBX model and apply the texture to all meshes
     fbx.traverse((child:THREE.Object3D) => {
       if (child instanceof THREE.Mesh) {
        if (!child.geometry.attributes.uv) {
            console.warn("UV error");
            return;
          }
         // Replace material with MeshStandardMaterial and apply the texture
         child.material = new THREE.MeshStandardMaterial({
            map: texture,
            metalness: 1,
            roughness: 0.16,
            
          });
          texture.wrapS = THREE.RepeatWrapping; // Allow repeating
          texture.wrapT = THREE.RepeatWrapping; // Allow repeating
          textureRef.current = texture; // Save texture for animation
       }
     });
 
     // Add the FBX model to the group
     if (group.current) {
       group.current.add(fbx);
     }
   }, [fbx, texture]);

   useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

   useFrame(() => {
    if (textureRef.current) {
       
           textureRef.current.offset.x = (mouseX / window.innerWidth)*0.5 ;
           textureRef.current.offset.y = -(mouseY / window.innerHeight) * 0.5 ;
    //     textureRef.current.offset.x += 0.002; // Slow horizontal movement
    //     textureRef.current.offset.y += 0.001; 
    }


  });
  return (<>
  <group >
   
  <ambientLight intensity={0.8} />
      <directionalLight position={[0, 0, 15]} intensity={1}  />
      <directionalLight position={[10, 0, 15]} intensity={1} />
      <directionalLight position={[10, 2, 15]} intensity={1} />
      <directionalLight position={[20, 2, 15]} intensity={1} />
      <directionalLight position={[10, 0, 15]} intensity={1} />
      <directionalLight position={[-10, 0, 15]} intensity={1} />
      <directionalLight position={[-20, 0, 15]} intensity={1} />
      <directionalLight position={[1, 5, 15]} intensity={1} />
      <directionalLight position={[10, -6, 15]} intensity={1} />
      <directionalLight position={[0, -6, 15]} intensity={1} />
      <directionalLight position={[-10, -6, 15]} intensity={1} />
      <directionalLight position={[-20, -6, 15]} intensity={1} />
      <primitive ref={group} object={fbx}  rotation={[Math.PI / 2, 0, 0]} scale={[0.19, 0.19, 0.19]}/>
    </group>
  </>
  
);
}