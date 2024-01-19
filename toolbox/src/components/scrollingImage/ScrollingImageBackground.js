import React, { useEffect, useRef } from "react";
import "./ScrollingImageBackground.css"

function ScrollingImageBackground({ picPositionPixels = 0, backgroundImageSource = "", firstParagraphFirstRow = "", firstParagraphSecondRow = "", secondParagraph = "" }) {

  const bgImgRef = useRef()
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


  return (
    <div ref={bgImgRef} className="parallax-main-div" style={{ backgroundImage: `url(${backgroundImageSource})`, backgroundPositionY: `${{ picPositionPixels }}px` }}>

      <div className="textContent" >
        <p className="first-paragraph" >
          <span className="first-paragraph-first-row">{firstParagraphFirstRow}</span>
          <br />
          <span className="first-paragraph-first-row">{firstParagraphSecondRow}</span>
        </p>

        <p className="second-paragraph" >{secondParagraph}</p>
      </div>
    </div>
  );
}

export default ScrollingImageBackground;

{/* <ScrollingImageBackground 
        backgroundImageSource = {imageSourcePicsum}
        picPositionPixels={0}
        firstParagraphFirstRow="lorem ipsum"
        firstParagraphSecondRow="ipsum lorem"
        secondParagraph="lorem lorem ipsum ipsum"
        
        /> 
        only vertical images should be used as to avoid background-repeat effect,
        and for the component to work as intended.

        when implementing the component use the "backgroundImageSource" to move the pic
        up or down (exp: backgroundImageSource = {-200} meaning -200 pixels )
      code for implementing the img with text overlay
    adjust the text size as needed */}
