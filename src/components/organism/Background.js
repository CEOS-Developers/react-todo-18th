import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

export default function Background() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: "0px",
        zIndex: "-999",
      }}
    >
      {/* three.js 라이브러리에서 가져온 컴포넌트 */}
      <Canvas resize={{ polyfill: false }}>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
      </Canvas>
    </div>
  );
}
