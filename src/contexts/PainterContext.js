import React, { createContext, useState } from "react";

export const colors = [
  { name: "blanco", hex: "#fff" },
  { name: "negro", hex: "#000" },
  { name: "rojo", hex: "#ff0000" },
  { name: "verde", hex: "#00ff00" },
  { name: "azul", hex: "#0000ff" },
  { name: "rosado", hex: "#ffa6c9" },
  { name: "amarillo", hex: "#ffff00" },
  { name: "marron", hex: "#a52a2a" },
  { name: "azul claro", hex: "#add8e6" },
  { name: "purpura", hex: "#9370db" }
];

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <ColorContext.Provider value={{ selectedColor, setSelectedColor }}>
      {children}
    </ColorContext.Provider>
  );
};
