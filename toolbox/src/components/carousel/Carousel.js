import React, { Component, useEffect } from "react";
import "./Carousel.css"
import { logRoles } from "@testing-library/react";


function Carousel({ carouselItems = [] }) {

  useEffect(() => {
    let debounce = false

    let currentIndex = 0
    let carousel = document.querySelector('.carousel-sliding-div')
    let currentSlide = document.querySelectorAll('.carousel-slide-div')[1]

    function moveSliderTo(index) {
      carousel.style.transition = `none`
      currentIndex = index
      carousel.style.transform = `translateX(-${currentIndex * currentSlide.clientWidth}px)`
      setTimeout(()=>carousel.style.transition = ``, 50 )

    }

    function moveLeft() {
      if (debounce)
      return
    
    debounce = true
    currentIndex--
    carousel.style.transform = `translateX(-${currentIndex * currentSlide.clientWidth}px)`

    console.log("idemo desno")
    setTimeout(() => {
      if (currentIndex == 0) {
        moveSliderTo(carouselItems.length -2)
      }
      debounce = false}, 620)
    }
    function moveRight() {
      if (debounce)
        return
      
      debounce = true
      currentIndex++
      carousel.style.transform = `translateX(-${currentIndex * currentSlide.clientWidth}px)`

      console.log("idemo desno")
      setTimeout(() => {
        if (currentIndex == carouselItems.length - 1) {
          moveSliderTo(1)
        }
        debounce = false}, 620)

    }
    function handleKeyPress(event) {

      if (event.key === 'ArrowLeft') {
        moveLeft()
      }

      else if (event.key === 'ArrowRight') {
        moveRight()
      }
      else if (event.key === "ArrowUp") {

        carouselItems.unshift(carouselItems.length - 3)



      }
      else {
        console.log("jebemliga vise")
      }
    }
    moveSliderTo(1)

    document.querySelectorAll(".button-left")[0].addEventListener("click", moveLeft)
    document.querySelectorAll(".button-right")[0].addEventListener("click", moveRight)
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);

      document.querySelector(".button-left").removeEventListener("click", moveLeft);
      document.querySelector(".button-right").removeEventListener("click", moveRight);



    };
  }, []);





  const InitialisingItems = () => {
    // another way to add to the beginning and end of the array
    // carouselItems.push(carouselItems[0])
    // carouselItems.unshift(carouselItems[carouselItems.length -2])
    // console.log(carouselItems)

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
      <button className="button-left"  >
        <img className="button-png" src="/resources/arrow-left.png" />
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




// function moveLeft() {
//   if (currentIndex == 0) {
//     currentIndex = carouselItems.length - 1
//     carousel.style.transition = `none`

//   }
//   else {
//     currentIndex--

//     carousel.style.transform = `translateX(-${currentIndex * currentSlide.clientWidth}px)`
//     carousel.style.transition = `0.6s transform ease`
//   }

//   console.log("idemo levo")
// }
// function moveRight() {
//   if (currentIndex == carouselItems.length - 1) {
//     currentIndex = 0
//     carousel.style.transition = `none`
//   }

//   else {
//     currentIndex++
//     carousel.style.transform = `translateX(-${currentIndex * currentSlide.clientWidth}px)`
//     carousel.style.transition = `0.6s transform ease`
//   }
//   console.log("idemo levo")

// }