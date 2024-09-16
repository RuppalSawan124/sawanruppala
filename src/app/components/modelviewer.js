import React from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function CameraAdjust() {
  const { camera } = useThree();
  // Move the camera closer to the model's face
  camera.position.set(-5, -0.5, 1); // Adjust as necessary
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
      <primitive object={scene} scale={10} />

      {/* OrbitControls with limited touch interaction */}
      <OrbitControls
        enableZoom={false} // Disable zoom
        enablePan={false}  // Disable pan to prevent movement on touch devices
        rotateSpeed={0.5}  // Reduce rotate speed to prevent extreme rotation
        enableRotate={true} // Keep rotation enabled for mouse
        // Adjust touch settings
        touch={{ 
          ONE: false, // Disable single-finger touch rotation
          TWO: false  // Disable two-finger touch panning/rotation
        }}
      />
    </Canvas>
  );
}
