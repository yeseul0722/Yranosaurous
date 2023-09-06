import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber/native";

const CustomGlobe = () => {
    const refMesh = useRef<any>()
    useFrame((state, delta) => {
        refMesh.current.rotation.y += delta
    })
    
    return(
            <>
            <directionalLight position={[1, 1, 1]} />

            {/* 전체 좌표 축 */}
            {/* <axesHelper scale={10} /> */}

            <mesh ref={refMesh} rotation-y={45*Math.PI/180}
                position={[0, 0, 0]} // 위치 이동
                rotation={[0, 45*Math.PI/180, 0]} // 회전 변환
                scale={[1, 1, 1]} // 크키변경
            >
                <sphereGeometry />
                <meshStandardMaterial color="#4e64ef" 
                    opacity={0.5} transparent={true}
                />
                <axesHelper scale={3}/> 

                <mesh
                    scale={[0.1, 0.1, 0.1]}
                >
                    <boxGeometry />
                    <meshStandardMaterial color="red" />
                </mesh>
            </mesh>
            </>
    )
}

export default CustomGlobe;