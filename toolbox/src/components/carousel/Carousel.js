import React, { Component, useEffect, useRef } from "react";
import "./Carousel.css"

function sleep(time) {
  return new Promise((resolve) => {
      setTimeout(resolve, time || 1000);
  });
}

function Carousel({ carouselItems = [] }) {
  let carouselRef = useRef(null)
  let buttonLeftRef = useRef(null)
  let buttonRightRef = useRef(null)
  useEffect(() => {
    
    let debounce = false
    let currentIndex = 0
    let carousel = carouselRef.current
    let currentSlide = document.querySelectorAll('.carousel-slide-div')[0]

    async function moveSliderTo(index) {
      carousel.style.transition = `none`
      currentIndex = index
      while (currentSlide.clientWidth == 0) {
        await sleep(10);
      }
      carousel.style.transform = `translateX(-${currentIndex * currentSlide.clientWidth}px)`
      setTimeout(()=>carousel.style.transition = ``, 20 )
      
    }

    function moveLeft() {
      if (debounce)
      return
    
    debounce = true
    currentIndex--
    carousel.style.transform = `translateX(-${(currentIndex * currentSlide.clientWidth) -5}px)`
    setTimeout(() => {
      if (currentIndex == 0) {
        moveSliderTo(carouselItems.length -2)
      }
      debounce = false}, 201)
    }
    function moveRight() {
      if (debounce)
        return
      
      debounce = true
      currentIndex++
      carousel.style.transform = `translateX(-${currentIndex * currentSlide.clientWidth}px)`
      setTimeout(() => {
        if (currentIndex == carouselItems.length - 1) {
          moveSliderTo(1)
        }
        debounce = false}, 201)

    }
    function handleKeyPress(event) {

      if (event.key === 'ArrowLeft') {
        moveLeft()
      }

      else if (event.key === 'ArrowRight') {
        moveRight()
      }
    }
    moveSliderTo(1)
    
    console.log(document.querySelectorAll(".button-right"))
    buttonLeftRef.current.addEventListener("click", moveLeft)
    buttonRightRef.current.addEventListener("click", moveRight)
    window.addEventListener("keydown", handleKeyPress);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);

      buttonLeftRef.current.removeEventListener("click", moveLeft);
      buttonRightRef.current.removeEventListener("click", moveRight);

    };
  }, []);
  const InitializingItems = () => {
  

    carouselItems = [carouselItems[carouselItems.length - 1], ...carouselItems, carouselItems[0]]

    return carouselItems.map(item => {

      return (
        <div className="carousel-slide-div" key={item.Id}>

          <img className="carousel-image" src={item.imageSource} alt={item.altImage} />

        </div>
      )
    })

  }
  return (

    <div className="carousel-main-div">
      <button ref={buttonLeftRef} className="button-left"  >
        <img className="button-png" src="/resources/arrow-left.png" />
      </button>
      <button ref={buttonRightRef} className="button-right"  >
        <img className="button-png" src="/resources/arrow-right.png" />
      </button>
      <div ref={carouselRef} className="carousel-initialized-slides-div">

        {InitializingItems()}

      </div>

    </div>

  );
}

export default Carousel;


function random() {
  return ( console.log("randomshit") );
}

export {random} ;