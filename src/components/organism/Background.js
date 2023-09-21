import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

export default function Background() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas resize={{ polyfill: false }}>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
      </Canvas>
    </div>
  );
}
