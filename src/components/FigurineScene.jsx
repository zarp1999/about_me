import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Bounds, Center, Loader, OrbitControls, useGLTF } from '@react-three/drei';

const MODEL_URL = `${import.meta.env.BASE_URL}figurine.glb`;
const SWAY_ANGLE = Math.PI / 4; // 45度
const SWAY_SPEED = 0.6;

useGLTF.preload(MODEL_URL);

function FigurineModel() {
  const groupRef = useRef();
  const { scene } = useGLTF(MODEL_URL);
  const clone = useMemo(() => scene.clone(true), [scene]);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.elapsedTime * SWAY_SPEED) * SWAY_ANGLE;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.4, 0]}>
      <Center>
        <primitive object={clone} />
      </Center>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} />
      <directionalLight position={[-3, 4, -2]} intensity={0.4} />
      <Bounds fit clip observe margin={0.9}>
        <FigurineModel />
      </Bounds>
      <OrbitControls
        makeDefault
        enablePan={false}
        minDistance={1}
        maxDistance={20}
        target={[0, 0.35, 0]}
      />
    </>
  );
}

export default function FigurineScene() {
  return (
    <div className="figurine-scene">
      <Canvas
        camera={{ position: [0, 1, 5], fov: 45, near: 0.01, far: 1000 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      <Loader
        containerStyles={{ background: 'transparent' }}
        innerStyles={{ width: 36, height: 36, borderWidth: 3 }}
        barStyles={{ display: 'none' }}
        dataStyles={{ color: '#fff', fontSize: '0.85rem', marginTop: '1rem' }}
      />
    </div>
  );
}
