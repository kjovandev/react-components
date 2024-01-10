import React from "react";
import ZoomingImage from "./components/ZoomingImage";
function App() {
  return (
    <div className="App" style={{height:"3000px"}}>


      <div style={{marginTop: "700px", maxHeight:"300px", maxWidth:"500px"}}>
      <ZoomingImage stop={false} source = "https://fastly.picsum.photos/id/1084/536/354.jpg?grayscale&hmac=Ux7nzg19e1q35mlUVZjhCLxqkR30cC-CarVg-nlIf60" alt = "alt vrednost" />

      </div>

    </div>
  );
}

export default App;
