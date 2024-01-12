import React, { Component } from "react";
import "./Carousel.css"

function Carousel({carouselItems = []}) {
    const InitialisingItems = () => {

        return carouselItems.map(item => {
            return (
                <div className="carousel-slide-div">
                <img className="carousel-image" src={item.imageSource} alt={item.altImage}  />
                <p className="imageTitle" > {item.imageTitle} </p>
                <p className="carousel-img-paragraph"> {item.imageParagraph} </p>
            </div>
            )
        })

    }

    return ( 
        
        <div className="carousel-main-div">
            {InitialisingItems()}
            


        </div>

     );
}

export default Carousel;