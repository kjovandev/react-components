import React from "react";
import ZoomingImage from "./components/ZoomingImage/ZoomingImage";
import Spinner from "./components/Spinner/Spinner";
import Carousel from "./components/carousel/Carousel";
import "./index.css"



function App() {
  const carouselItems = [{
    imageSource: "https://fastly.picsum.photos/id/1084/536/354.jpg?grayscale&hmac=Ux7nzg19e1q35mlUVZjhCLxqkR30cC-CarVg-nlIf60", 
    altImage: "image 1", 
    imageTitle:"image 1 title",
    imageParagraph:"image 1 paragraf"},
    {
      imageSource:"https://fastly.picsum.photos/id/586/536/354.jpg?hmac=P7VlXEEnfksFtsPAdPrNzb5pPU0QKTGK8d2z_aFuH80",
      altImage: "image 2", 
      imageTitle:"image 2 title",
      imageParagraph:"image 2 paragraf"
    },
    {
      imageSource:"https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0",
      altImage: "image 2", 
      imageTitle:"image 2 title",
      imageParagraph:"image 2 paragraf"
    },
    {
      imageSource:"https://fastly.picsum.photos/id/1084/536/354.jpg?grayscale&hmac=Ux7nzg19e1q35mlUVZjhCLxqkR30cC-CarVg-nlIf60",
      altImage: "image 2", 
      imageTitle:"image 2 title",
      imageParagraph:"image 2 paragraf"
    },
    {
      imageSource:"https://fastly.picsum.photos/id/1060/536/354.jpg?blur=2&hmac=0zJLs1ar00sBbW5Ahd_4zA6pgZqCVavwuHToO6VtcYY",
      altImage: "image 2", 
      imageTitle:"image 2 title",
      imageParagraph:"image 2 paragraf"
    }

    
  
  ]
  return (
    <div className="App" style={{height:"3000px"}}>


      {/* <div style={{marginTop: "700px", maxHeight:"300px", maxWidth:"500px"}}>
      <ZoomingImage stop={false} source = "https://fastly.picsum.photos/id/1084/536/354.jpg?grayscale&hmac=Ux7nzg19e1q35mlUVZjhCLxqkR30cC-CarVg-nlIf60" alt = "alt vrednost" />

      </div> */}
      {/* <Spinner></Spinner> */}




      <div className="app-main-div" >
      
        <Carousel 
        carouselItems={carouselItems}
         className = "carousel-component" >
         </Carousel>


      </div>
    
    
    
    
    </div>
  );
}

export default App;
