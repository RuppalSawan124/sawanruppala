import { useGLTF } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

useGLTF.preload('/sawan_face.glb'); // Preload the GLB model

function CameraAdjust() {
  const { camera } = useThree();
  camera.position.set(-5, -0.5, 1);
  return null;
}

export default function ModelViewer() {
  const { scene } = useGLTF('/sawan_face.glb');

  return (
    <Canvas className="h-full w-full">
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} />
      <CameraAdjust />
      <primitive object={scene} scale={10} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.7}
        enableRotate={true}
        touch={{ ONE: false, TWO: false }}
      />
    </Canvas>
  );
}
