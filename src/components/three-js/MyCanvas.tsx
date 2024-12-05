"use client"
import { ReactElement ,Suspense,useRef} from 'react';
import { Canvas,useFrame } from "@react-three/fiber";
export default function MyCanvas({ children }: { children: ReactElement }) {
  

    return (
        
        <Canvas 
         gl={{ antialias: true }} 
         style={{
         width: 300,
         height: 80,
         }}
        >

        <Suspense fallback={null}>
        {children && (
           <>
             {children}
           </>
         )}
         </Suspense>  
        </Canvas>
        
    );
}
//CancasLoader:https://youtu.be/41lfYQhUzRs?t=26557