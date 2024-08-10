

"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

const Wizard = React.memo(function Wizard(props) {
  const textRef = useRef();

  // Animation for floating effect
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y =
        0 + Math.sin(state.clock.elapsedTime) * 0.15;
    }
  });

  return (
    <group
      {...props}
      dispose={null}
      ref={textRef}
      position={[0, 0, 0]}
      scale={[1, 1, 1]}  // Adjust the scale as needed
      rotation={[0, 0, 0]}
    >
      <Text
        color="gold" // Set text color
        fontSize={0.45} // Adjust the font size
        anchorX="center"
        // fontStyle="italic"
        anchorY="middle" // Center align text vertically
      >
   Faizcasm👨🏽‍💻
      </Text>
    </group>
  );
});

export default Wizard;
