"use client";

import { Float, OrbitControls, PointMaterial, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function HologramCore() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.35;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
  });

  return (
    <group ref={groupRef}>
      <Float speed={2.2} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh>
          <torusKnotGeometry args={[1.2, 0.3, 200, 16]} />
          <meshPhysicalMaterial
            color="#22d3ee"
            emissive="#00d9ff"
            emissiveIntensity={0.9}
            roughness={0.1}
            metalness={0.55}
            clearcoat={1}
          />
        </mesh>
      </Float>

      <mesh position={[2.2, 1.05, 0.2]}>
        <boxGeometry args={[0.65, 0.65, 0.65]} />
        <meshStandardMaterial color="#4f46e5" emissive="#4f46e5" emissiveIntensity={0.35} />
      </mesh>
      <mesh position={[-2.1, -1.1, 0.4]}>
        <icosahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial color="#00d9ff" emissive="#00d9ff" emissiveIntensity={0.35} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.6, 2.1, 64]} />
        <meshBasicMaterial color="#7dd3fc" transparent opacity={0.25} />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <ringGeometry args={[1.4, 1.9, 64]} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

function ParticleField() {
  const positions = useMemo(() => {
    const pts: number[] = [];
    for (let i = 0; i < 220; i += 1) {
      pts.push((Math.random() - 0.5) * 8);
      pts.push((Math.random() - 0.5) * 8);
      pts.push((Math.random() - 0.5) * 8);
    }
    return new Float32Array(pts);
  }, []);

  return <Points positions={positions} />;
}

function Points({ positions }: { positions: Float32Array }) {
  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[new Float32Array(positions), 3]} />
      </bufferGeometry>
      <PointMaterial size={0.03} sizeAttenuation depthWrite={false} color="#7dd3fc" transparent opacity={0.7} />
    </points>
  );
}

export default function OrbitalScene() {
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-[1.5rem] border border-cyan-400/20 bg-slate-950/70">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <color attach="background" args={["#050816"]} />
        <fog attach="fog" args={["#050816", 5, 18]} />
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={2.7} color="#00d9ff" />
        <pointLight position={[-8, -8, 6]} intensity={2.2} color="#4f46e5" />
        <HologramCore />
        <ParticleField />
        <Sparkles count={90} scale={7} size={2} speed={0.2} opacity={0.6} color="#22d3ee" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
      </Canvas>
    </div>
  );
}
