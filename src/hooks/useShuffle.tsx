import React from "react";

const accents = [
  "#4060ff",
  "#20ffa0",
  "#ff4060",
  "#ffcc00",
  "#ff00ff",
  "#ff8000",
  "#8000ff",
];
const shuffle = (accent = 0) => [
  { color: "#444", roughness: 0.1 },
  { color: "#444", roughness: 0.75 },
  { color: "#444", roughness: 0.75 },
  { color: "white", roughness: 0.1 },
  { color: "white", roughness: 0.75 },
  { color: "white", roughness: 0.1 },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.75, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
];

export const useShuffle = () => {
  const [accent, click] = React.useReducer(
    (state) => ++state % accents.length,
    0
  );

  const connectors = React.useMemo(() => shuffle(accent), [accent]);

  return { connectors, click };
};
