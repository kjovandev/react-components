import React, { Component, useEffect } from "react";
import "./ZoomingImage.css"

function ZoomingImage (props) {
    
    let baseScroll = null;

    useEffect(() => 
    {
        function isInViewport(element) {

            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        const handleScroll = () => {
            if ((baseScroll == null || props.stop) && !isInViewport(document.querySelector(".zooming-image-container"))){
                console.log("ne vidim ga")
                return;
            }
            if (baseScroll === null )
            {
                baseScroll = window.scrollY;
            }
            const scrolled = window.scrollY
            document.querySelector(".zooming-image").style.minHeight = `${100 + (scrolled - baseScroll) * 0.8}%`
            document.querySelector(".zooming-image").style.minWidth = `${100 + (scrolled - baseScroll) * 0.8}%`

        }



        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll",handleScroll)
    }, [])


    
    return ( 
        <div className="zooming-image-container" >
            <img className="zooming-image" src={props.source} alt={props.alt}></img>
        </div>

     );
}

export default ZoomingImage ;