import React from "react";
import ColorPicker from "./ColorPicker";
import PaintGrid from "./PaintGrid";
import ColorPreview from "./ColorPreview";
import { ColorProvider } from "../contexts/PainterContext";
import "./App.css";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <div className="centered">
          <h2>PIXELARTER</h2>
          <ColorPicker />
          <ColorPreview />
          <br />
          <PaintGrid />
        </div>
      </div>
    </ColorProvider>
  );
}

export default App;
