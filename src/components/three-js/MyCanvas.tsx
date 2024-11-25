"use client"
import { ReactElement ,useRef} from 'react';
import { Canvas,useFrame } from "@react-three/fiber";
export default function MyCanvas({ children }: { children: ReactElement }) {
    const rendererRef = useRef(null);
   
    //camera={{ position: [0, 0, 14] }}
    return (
        
        <Canvas  gl={{ antialias: true }} ref={rendererRef}  
        style={{
        width: 300,
        height: 80,
       }}
     
      >
        
            {children}</Canvas>
        
    );
}