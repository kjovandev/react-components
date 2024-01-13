import React, { Component, useEffect } from "react";
import "./Carousel.css"

function Carousel({carouselItems = []}) {
        
    useEffect(() => {
      let currentIndex = 0
      let firstSlide = carouselItems[0];
      console.log(firstSlide)
      function carouselCloning() {
        carouselItems.append(carouselItems[0])
      }
      function moveLeft () {
        if (currentIndex == 0)
            return
          currentIndex--
          
          let currentSlide = document.querySelectorAll('.carousel-slide-div')[1]
          let carousel = document.querySelector('.carousel-sliding-div')

          carousel.style.transform = `translateX(-${currentIndex * currentSlide.clientWidth}px)` 
      

      }

      function moveRight () {
        if (currentIndex == carouselItems.length - 1)
            return
          currentIndex++
          let currentSlide = document.querySelectorAll('.carousel-slide-div')[1]
          let carousel = document.querySelector('.carousel-sliding-div')

          carousel.style.transform = `translateX(-${currentIndex * currentSlide.clientWidth}px)`
        
      }
      function handleKeyPress(event) {

        if (event.key === 'ArrowLeft') {
          moveLeft()
            }

        else if (event.key === 'ArrowRight'){
          moveRight()
        }
        else {
          console.log("error catch")
        }
      }
      
        document.querySelectorAll(".button-left") [0].addEventListener("click", moveLeft)
        document.querySelectorAll(".button-right")[0].addEventListener("click", moveRight)
        window.addEventListener("keydown", handleKeyPress);
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
          
      document.querySelector(".button-left").removeEventListener("click", moveLeft);
      document.querySelector(".button-right").removeEventListener("click", moveRight);
      


        };
      }, []);
  
      


      
    const InitialisingItems = () => {
        carouselItems.push(carouselItems[0])
        return carouselItems.map(item => {
          
            return (
              <div className="carousel-slide-div" key={item.Id}>
                
                <img className="carousel-image" src={item.imageSource} alt={item.altImage}   />
            
              </div>
            )
        })

    }

    

    return ( 
        
        <div className="carousel-main-div">
                  <button className="button-left"  >
                    <img  className="button-png" src="/resources/arrow-left.png" />
                  </button>
                  <button className="button-right"  >
                    <img className="button-png" src="/resources/arrow-right.png" />
                  </button>
          <div className="carousel-sliding-div">
            
            {InitialisingItems()}

          </div>
            
        </div>

     );
}

export default Carousel;