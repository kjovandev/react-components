import React, { useEffect, useRef } from "react";
import "./ScrollingImageBackground.css"

function ScrollingImageBackground({ picPositionPixels = 0 }) {

 const  bgImgRef = useRef()
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      bgImgRef.current.style.backgroundPositionY = `${picPositionPixels + scrolled * 0.5}px`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  let src = 'https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0'
  return (
  <div ref={bgImgRef} className="parallax-main-div" style={{ backgroundImage: `url(${src})`, backgroundPositionY: `${{picPositionPixels}}px` }}>

      <div className="textContent" >
        <p className="first-paragraph" >
          <span className="first-paragraph-first-row">SIMUN</span>
          <br />
          <span className="first-paragraph-first-row">ELEKTROINSTALATION</span>
        </p>

        <p className="second-paragraph" >Sinonim za kvalitet</p>
      </div>
    </div>
  );
}

export default ScrollingImageBackground;