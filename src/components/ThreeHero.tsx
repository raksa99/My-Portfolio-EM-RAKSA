import { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    // Rotate the shape slowly
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    
    // Slight mouse interaction
    const targetX = state.pointer.x * 0.5;
    const targetY = state.pointer.y * 0.5;
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.1);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.1);
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.15 : 1.0}
      >
        <torusKnotGeometry args={[1, 0.35, 128, 16]} />
        <meshPhysicalMaterial
          color={hovered ? "#a78bfa" : "#8b5cf6"}
          roughness={0.1}
          metalness={0.1}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          transmission={0.6} // Glassmorphism
          thickness={1.2}
          ior={1.5}
          attenuationColor="#ffffff"
          attenuationDistance={1}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

export default function ThreeHero() {
  const [hasError, setHasError] = useState(false);

  // WebGL context error boundary fallback
  if (hasError) {
    return (
      <div className="flex items-center justify-center h-full w-full bg-slate-100/50 dark:bg-slate-900/50 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 p-6 text-center">
        <div>
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 dark:bg-primary-950 flex items-center justify-center text-primary-500">
            📸
          </div>
          <h3 className="text-lg font-bold mb-2">Interactive 3D Art</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">
            WebGL is currently disabled or unsupported. Upgrade your browser or enable hardware acceleration to view the interactive 3D model.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] relative">
      <Suspense fallback={
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
        </div>
      }>
        <Canvas
          camera={{ position: [0, 0, 4.5], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
          onError={() => setHasError(true)}
          className="w-full h-full"
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <pointLight position={[-10, -10, -5]} intensity={0.8} color="#a78bfa" />
          <pointLight position={[5, -5, 5]} intensity={1.2} color="#ec4899" />
          
          <FloatingShape />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={2 * Math.PI / 3}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
