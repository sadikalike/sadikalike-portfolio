"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Box, Plane } from "@react-three/drei";
import * as THREE from "three";
import { useScroll } from "framer-motion";
import { useTexture } from "@react-three/drei";

function RobotScene() {
  // ರೋಬೋಟ್‌ಗೆ ಸ್ಕ್ರಾಲ್ ಎಫೆಕ್ಟ್ ಬೇಡ, ಆದ್ದರಿಂದ ಇಲ್ಲಿ useScroll ಬಳಸುತ್ತಿಲ್ಲ
  const robotTexture = useTexture("/robot.png");

  return (
    <group>
      {/* === 3D ROBOT (Image Plane) - Static & No Box === */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
        
        {/* ರೋಬೋಟ್ ಚಿತ್ರವನ್ನು 3D ಪ್ಲೇನ್ ಮೇಲೆ ತೋರಿಸುತ್ತದೆ. 
            ಯಾವುದೇ ಹಿನ್ನೆಲೆ ಬಾಕ್ಸ್ ಇಲ್ಲ. 
            ಮತ್ತು ಬಿಳಿ ಬಣ್ಣವನ್ನು ಮಾಯವಾಗಿಸಲು AdditiveBlending ಬಳಸಿದ್ದೇವೆ. */}
        <Plane args={[3.5, 3.5]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            map={robotTexture} 
            transparent={true} 
            side={THREE.DoubleSide} 
            blending={THREE.AdditiveBlending} 
            depthWrite={false}
          />
        </Plane>
        
      </Float>
    </group>
  );
}

function ScrollingBlocks() {
  const groupRef = useRef<THREE.Group>(null);
  const { scrollYProgress } = useScroll();

  useFrame(() => {
    if (groupRef.current) {
      const scrollValue = scrollYProgress.get();
      // ಸ್ಕ್ರಾಲ್ ಮಾಡಿದಾಗ ಬ್ಲಾಕ್‌ಗಳು ಮಾತ್ರ ತಿರುಗುತ್ತವೆ
      groupRef.current.rotation.y = scrollValue * -Math.PI * 3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* === ಆಕಾಶದಲ್ಲಿ ತೇಲಾಡುವ 3D ಬ್ಲಾಕ್‌ಗಳು === */}
      {Array.from({ length: 15 }).map((_, i) => {
        const angle = (i / 15) * Math.PI * 2;
        const radius = 2.5 + Math.random() * 1.5;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = (Math.random() - 0.5) * 3;
        const color = i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#8b5cf6" : "#22c55e";

        return (
          <Float key={i} speed={1.5 + Math.random()} rotationIntensity={2} floatIntensity={2}>
            <Box args={[0.15, 0.15, 0.15]} position={[x, y, z]}>
              <meshStandardMaterial color={color} roughness={0.1} metalness={0.8} />
            </Box>
          </Float>
        );
      })}
    </group>
  );
}

export default function Planet() {
  return (
    <div className="w-full h-[400px] md:h-[500px] relative z-0 flex items-center justify-center overflow-hidden">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <Stars radius={100} depth={50} count={4000} factor={4} saturation={0} fade speed={1} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 5, 2]} intensity={2} color="#ffffff" />
        <pointLight position={[-3, -3, -3]} intensity={2} color="#3b82f6" />
        
        {/* ರೋಬೋಟ್ ಸ್ಥಿರವಾಗಿರುತ್ತದೆ */}
        <RobotScene />
        {/* ಬ್ಲಾಕ್‌ಗಳು ಮಾತ್ರ ಸ್ಕ್ರಾಲ್ ಆಗುತ್ತವೆ */}
        <ScrollingBlocks />
      </Canvas>
    </div>
  );
}