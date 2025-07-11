import {
    PresentationControls, 
    SpotLight, 
    Stage 
} from "@react-three/drei";
import { Suspense } from "react";
import BallMaze from "./BallMaze";

const Experience = () => {

    return (
        <PresentationControls 
            speed={1.0} 
            global zoom={.6} 
            polar={[-2, Math.PI / 1]}
        >
            <Stage environment={"apartment"} intensity={1} shadows={false} adjustCamera={true} contactShadow={false} castShadow={false} preset="rembrandt">
            <Suspense fallback={null}>
                <BallMaze />
            </Suspense>
            </Stage>
        </PresentationControls>
    );
};

export default Experience;