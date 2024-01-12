import React, { Component, useEffect } from "react";
import "./Carousel.css"

function Carousel({carouselItems = [], autoslide = false}) {
        
    useEffect(() => {
      let currentIndex = 0
      function handleKeyPress(event) {
        // console.log(event)
        if (event.key === 'ArrowLeft') {
          if (currentIndex == 0)
            return
          currentIndex--
          
          console.log("stiso si levo")
          let drugi = document.querySelectorAll('.carousel-slide-div')[1]
          let carousel = document.querySelector('.carousel-sliding-div')

          // carousel.scrollTo(currentIndex * drugi.clientWidth , 0)
          carousel.style.transform = `translateX(-${currentIndex * drugi.clientWidth}px)` 
        }
        else if (event.key === 'ArrowRight'){
          if (currentIndex == carouselItems.length - 1)
            return
          currentIndex++
          console.log(currentIndex)
          let drugi = document.querySelectorAll('.carousel-slide-div')[1]
          let carousel = document.querySelector('.carousel-sliding-div')

          carousel.style.transform = `translateX(-${currentIndex * drugi.clientWidth}px)`
          // carousel.scrollTo(currentIndex * drugi.clientWidth , 0)
        }
        
       
        else if (event.key === 'ArrowUp') 
          console.log("stiso si gore")
        
        else 
        {console.log("stiso si Dole")}

        
      }
        window.addEventListener("keydown", handleKeyPress);
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
      }, []);

    
    const InitialisingItems = () => {

        return carouselItems.map(item => {
          
            return (
              <div className="carousel-slide-div" key={item.Id}>
                <img className="carousel-image" src={item.imageSource} alt={item.altImage}   />
                <p className="imageTitle" > {item.imageTitle} </p>
                <p className="carousel-img-paragraph"> {item.imageParagraph} </p>
              </div>
            )
        })

    }

    

    return ( 
        
        <div className="carousel-main-div">

          <div className="carousel-sliding-div">
            {InitialisingItems()}

          </div>
            
        </div>

     );

}

export default Carousel;