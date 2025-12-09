import { Environment, OrbitControls } from "@react-three/drei";
import { XboxWirelessController } from "./XboxWirelessController.tsx";

export const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom enablePan={false} />
      <Environment preset="studio" />
      <XboxWirelessController
        visible
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </>
  );
};
