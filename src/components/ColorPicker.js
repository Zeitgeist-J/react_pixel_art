import React, { useContext } from "react";
import { ColorContext } from "../contexts/PainterContext";
import "./ColorPicker.css";
import { colors } from "../contexts/PainterContext";

function ColorPicker() {
  const { setSelectedColor } = useContext(ColorContext);

  const colorOption = (color) => {
    return (
      <div
        key={color.name}
        className="color"
        style={{ backgroundColor: color.hex }}
        onClick={() => {
          setSelectedColor({ ...color });
        }}
      />
    );
  };

  const colorOptions = () => {
    return colors.map((color) => colorOption(color));
  };

  return <div className="colorpicker">{colorOptions()}</div>;
}

export default ColorPicker;
