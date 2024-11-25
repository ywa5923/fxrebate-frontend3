"use client"
import React, { useRef } from 'react';
import { useGLTF, Decal, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { OrbitControls} from "@react-three/drei";
import * as THREE from "three";
import { MeshBasicMaterial,MeshStandardMaterial, MeshPhongMaterial } from 'three';


export function Logo3({ fbxPath, texturePath }:{ fbxPath:string, texturePath:string }) {
  // Load the 3D model
  const { nodes,materials } = useGLTF(fbxPath);


  // Load the texture to be applied as a decal
  const decalTexture = useTexture(texturePath);
 
  decalTexture.wrapS = THREE.ClampToEdgeWrapping;
decalTexture.wrapT = THREE.ClampToEdgeWrapping;

  // A ref for rotating the model (optional)
  const modelRef = useRef();
  const objectScale = new THREE.Vector3();
objectScale.copy(nodes.Shape002.geometry.boundingBox.getSize(objectScale));
objectScale.multiplyScalar(1.3);

  // Rotate the model for some interaction
  useFrame((state, delta) => {
    //modelRef.current.rotation.y += 0.01;
    const speed = 0.1;
  const amplitude = 0.5;
  const offset = Math.sin(state.clock.elapsedTime * speed) * amplitude;
  decalTexture.offset.x = offset;
  decalTexture.needsUpdate = true;

  if (modelRef.current) {
    modelRef.current.material.metalness = 1;
    modelRef.current.material.roughness = 0.2;
  }

  // Update the material properties to give it a metallic appearance
  
  });
  const cubeTextureLoader = new THREE.CubeTextureLoader();
  const envMap = cubeTextureLoader.load([
    "./sky.jpeg", "./sky.jpeg", 
    "./sky.jpeg", "./sky.jpeg", 
    "./sky.jpeg", "./sky.jpeg",
  ]);
  
  return (
    <group  position={[0, -1.5, 0]}>
      {/* Mannequin model */}
     {/* <mesh geometry={nodes.Shape002.geometry} >*/} 
     <mesh  ref={modelRef} geometry={nodes.Shape002.geometry}  position={[-0.374, 0, 0.088]} rotation={[0, 0, 0]} scale={0.025} castShadow>
        {/* <meshStandardMaterial color="red" />*/}
      
        {/* Decal component to apply the image */}
        <Decal 
          position={[0, 0, 0]}     // Adjust position based on your model's needs
          rotation={[0, 0, 0]}  // Adjust rotation for orientation
          scale={objectScale}                  // Adjust size of the decal
          doubleSided={true}
          map={decalTexture}            // Pass the loaded texture here
       
       />
         <meshStandardMaterial color="yellow" metalness={1} roughness={0.005} envMap={envMap}/>
           
      </mesh>
      <ambientLight intensity={0.5} />
<directionalLight position={[5, 5, 5]} intensity={1}   />
 
      <OrbitControls/>
    </group>
  );
}

