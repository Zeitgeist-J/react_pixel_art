import React, { useContext } from "react";
import { ColorContext } from "../contexts/PainterContext";

const ColorPreview = () => {
  const { selectedColor } = useContext(ColorContext);

  return (
    <div className="colorPreview">
      El color seleccionado es: {selectedColor?.name}
    </div>
  );
}

export default ColorPreview;
