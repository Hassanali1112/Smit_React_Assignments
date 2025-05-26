import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model() {
  const model = useGLTF("/laptop.glb"); 
  return <primitive object={model.scene} scale={0.01} />;
}
