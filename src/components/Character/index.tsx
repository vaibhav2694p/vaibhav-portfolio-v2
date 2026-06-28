import { lazy, Suspense } from "react";

const CharacterScene = lazy(() => import("../CharacterScene"));

const CharacterModel = () => {
  return (
    <Suspense fallback={null}>
      <CharacterScene />
    </Suspense>
  );
};

export default CharacterModel;
