import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const skills = [
  "M365", "Azure", "Intune", "AVD", "AD",
  "Exchange", "SharePoint", "Teams", "Security", "Networking"
];

interface SkillSphereProps {
  text: string;
  position: [number, number, number];
  color: string;
  speed: number;
}

function SkillSphere({ text, position, color, speed }: SkillSphereProps) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      ref.current.rotation.y += 0.01;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
        <Text
          position={[0, 0, 0.35]}
          fontSize={0.08}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Geist.ttf"
        >
          {text}
        </Text>
      </mesh>
    </Float>
  );
}

const colors = ["#00d4ff", "#5eead4", "#7c3aed", "#0066ff", "#ec4899"];

const TechStack = () => {
  const spheres = useMemo(() =>
    skills.map((skill, i) => {
      const angle = (i / skills.length) * Math.PI * 2;
      const radius = 2.5;
      return {
        text: skill,
        position: [Math.cos(angle) * radius, Math.sin(angle * 2) * 1.5, Math.sin(angle) * radius] as [number, number, number],
        color: colors[i % colors.length],
        speed: 0.5 + Math.random() * 0.5,
      };
    }), []);

  return (
    <div className="techstack">
      <h2>My Tech Stack</h2>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#5eead4" />
        {spheres.map((s, i) => (
          <SkillSphere key={i} {...s} />
        ))}
      </Canvas>
    </div>
  );
};

export default TechStack;
