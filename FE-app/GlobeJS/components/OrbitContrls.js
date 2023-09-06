import useControls from "r3f-native-orbitcontrols";

import React, { useRef } from "react";

import { Canvas } from "@react-three/fiber";
import { View } from "react-native";

function SingleCanvas() {
    const [OrbitControls, events] = useControls()
    const refMesh = useRef()
  
    return (
      <View {...events}>
        <Canvas>
          <OrbitControls />
  
          <>
            <directionalLight position={[1, 1, 1]} />

            <axesHelper scale={10} /> 

            <mesh ref={refMesh} >
                <boxGeometry />
                <meshStandardMaterial color="#e67e22" />
            </mesh>
        </>
        </Canvas>
      </View>
    )
  }

export default SingleCanvas;