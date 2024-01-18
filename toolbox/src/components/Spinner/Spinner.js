import React, { Component, useEffect } from "react";
import "./Spinner.css"

function Spinner(props) {

    let baseScroll = null;
    let timeoutHandler
    let scrollInterval = 1000
    
    const scrollSpeed = 0.05


    function isInViewport(element) {

        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    function SpinSpinner() {

        const scrolled = window.scrollY
        const spinner = document.querySelector(".spinner-container")
        spinner.style.transform = `rotate(${((scrolled - baseScroll) * scrollSpeed) % 360}deg)`

    }
    function AdjustScrool() {
        const scrolled = (window.scrollY - baseScroll) * scrollSpeed

        if (scrolled % 90 == 0) {
            scrollInterval = 1000;
            return
        }
        if (scrolled % 90 > 45) {
            window.scrollTo(0, scrolled + 1)
        }
        else {
            window.scrollTo(0, scrolled - 1)
        }
        scrollInterval = 10
    }
    useEffect(() => {
        if (isInViewport(document.querySelector(".spinner-container")))
            baseScroll = 0;

        const handleScroll = () => {
            if ((baseScroll == null) && !isInViewport(document.querySelector(".spinner-container"))) {
                console.log("ne vidim ga")
                return;
            }
            if (baseScroll === null) {
                baseScroll = window.scrollY;
            }
            SpinSpinner()
            if (timeoutHandler) {
                clearTimeout(timeoutHandler);
            }

            timeoutHandler = setTimeout(() => {
                AdjustScrool()
            }, scrollInterval);

        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])



    return (
        <div className="spinner-container" >

        </div>
    );
}

export default Spinner;

// RAZLAGANJE PROJEKTA NA MANJE FUNKCIJE / KOMPONENTE I DEFINISANJE KOMPONENTI NA KRAJU.
