import React from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function CameraAdjust() {
  const { camera } = useThree();
  // Move the camera closer to the model's face
  camera.position.set(-5, -0.5, 1); // Closer to the model
  return null;
}

export default function ModelViewer() {
  const { scene } = useGLTF('/sawan_face.glb');

  return (
    <Canvas className="h-full w-full">
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} />
      
      {/* Adjust camera */}
      <CameraAdjust />

      {/* Render the model */}
      <primitive object={scene} scale={1.8} /> {/* Adjust the scale here */}
      
      {/* OrbitControls with zoom disabled */}
      <OrbitControls enableZoom={false} minDistance={1} maxDistance={1} />
    </Canvas>
  );
}
