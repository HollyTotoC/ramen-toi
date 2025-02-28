import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";
import { ErrorBoundary } from "react-error-boundary";

// Composant pour afficher un message d'erreur
function ErrorFallback() {
    return (
        <div className="text-red-500 p-4 bg-red-100 rounded">
            Erreur de chargement du modèle 3D
        </div>
    );
}

// Composant pour l'indicateur de chargement - utilisant Html de drei
function Loader() {
    return (
        <Html center>
            <div className="text-blue-500">Chargement du modèle...</div>
        </Html>
    );
}

// Composant pour le modèle Ramen
const RamenModel = () => {
    const ref = useRef<THREE.Group>(null);
    const { scene } = useGLTF("/assets/bowl/scene.gltf");

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.005; // Ajustez la vitesse de rotation ici
        }
    });

    if (!scene) {
        console.error("Erreur lors du chargement du modèle");
        // Fallback en cas d'erreur - une simple sphère
        return (
            <mesh>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="#e67e22" />
            </mesh>
        );
    }

    return (
        <primitive
            ref={ref}
            object={scene}
            scale={0.5}
            position={[0, -.1, 0]}
        />
    );
};

const BowlRamen = () => {
    return (
        <div style={{ height: "auto", width: "100%", marginTop: "20px" }}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Canvas camera={{ position: [0, 3, 6], fov: 70, zoom: 11 }}>
                    <ambientLight intensity={1} />
                    <directionalLight position={[0, 5, 5]} intensity={1} />
                    <Suspense fallback={<Loader />}>
                        <RamenModel />
                    </Suspense>
                </Canvas>
            </ErrorBoundary>
        </div>
    );
};

export default BowlRamen;
