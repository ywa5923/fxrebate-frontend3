"use client"

import { useRef, useEffect} from 'react';
import { OrbitControls, Sky, useFBX, Loader } from '@react-three/drei'
import { useLoader, useFrame } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { FirstPersonControls,useTexture,CubeCamera ,Environment } from '@react-three/drei';
import * as THREE from "three";


export default function MyBox() {
  //let fbx = useFBX('./text_test.fbx')
  const fbx = useLoader(FBXLoader, "./text_test.fbx");
  const meshRef = useRef();

  const texture = useTexture("./sky.jpeg"); // Replace with your texture path



  // Apply texture and rotation
  useEffect(() => {
    if (fbx) {
      // Apply the texture to all child meshes
      fbx.traverse((child) => {
        if (child.isMesh) {
          // child.material = new THREE.MeshStandardMaterial({
          //   map: texture,
          // });
          child.material = new THREE.MeshPhysicalMaterial({
            color:  0xffffff, // Light gray
            metalness: 1, // Fully metallic
            roughness: 0.1, // Perfectly smooth
            envMapIntensity: 1, // Adjust reflection intensity
          });
          
        }
      });

    }
  }, [fbx, texture]);

    return (
     
       <>
     
     <ambientLight intensity={9} />
        <directionalLight position={[0, 0, 1]} color="white" intensity={9} />   
            <mesh ref={meshRef} position={[10, 0, -32]} rotation={[Math.PI / 2, 0, 0]} scale={[0.5, 0.5, 0.5]}>
              <primitive object={fbx} dispose={null} />
            </mesh>
        </> 
       
      );
      //<ambientLight intensity={3} />
// /<pointLight position={[0, 0, 0]} />
}

