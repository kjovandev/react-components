import React, { useEffect, useState } from "react";
import ZoomingImage from "./components/ZoomingImage/ZoomingImage";
import Spinner from "./components/Spinner/Spinner";
import Carousel from "./components/carousel/Carousel";
import "./index.css"
import ScrollingImageBackground from "./components/scrollingImage/ScrollingImageBackground";
import TransparentHeader from "./components/TransparentHeader/TransparentHeader";
var imageSourcePicsum = "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"

function App() {

  const [carouselItems, setCarouselItems] = useState([])

  useEffect(() => {
      fetch("./carouselobjects.json")
      .then(response => response.json())
      .then(objekat => {
        setCarouselItems(objekat.data)
    }) 
  }, []);

  
  console.log(carouselItems)
  return (
    <div className="App" style={{ height: "3000px" }}>


      {/* <div style={{marginTop: "700px", maxHeight:"300px", maxWidth:"500px"}}>
      <ZoomingImage stop={false} source = "https://fastly.picsum.photos/id/1084/536/354.jpg?grayscale&hmac=Ux7nzg19e1q35mlUVZjhCLxqkR30cC-CarVg-nlIf60" alt = "alt vrednost" />

      </div> */}





      <div className="app-main-div" >
        <header> <TransparentHeader/> </header>

        {/* <ScrollingImageBackground 
        backgroundImageSource = {imageSourcePicsum}
        picPositionPixels={0}
        firstParagraphFirstRow="lorem ipsum"
        firstParagraphSecondRow="ipsum lorem"
        secondParagraph="lorem lorem ipsum ipsum"
        
        /> */}




        {/* <Carousel 
        carouselItems={carouselItems}
         className = "carousel-component" >
         </Carousel>

        <Spinner></Spinner>
         <Carousel 
        carouselItems={carouselItems}
         className = "carousel-component" >
         </Carousel> */}
      </div>




    </div>
  );
}

export default App;
