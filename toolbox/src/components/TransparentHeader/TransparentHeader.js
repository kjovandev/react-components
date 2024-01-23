import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./TransparentHeader.css"
import { hover } from "@testing-library/user-event/dist/hover";
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import userEvent from "@testing-library/user-event";
import gsap from "gsap";
import { unmountComponentAtNode } from "react-dom";
function TransparentHeader() {
    const dropdownRef = useRef(null)
    const hamburgerMenuRef = useRef(null)
    const hamburgerButton  = useRef(null)
    let widthRef = useRef(window.screen.availWidth)
    let widthRefCurrent = widthRef.current
    
    const [toggle, setToggle] = useState(false)
    const [hamburger, setHamburger] = useState(false)
    
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', updateScreenWidth);

        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, []); 




    function handleMouseClick(){
        
        setToggle(!toggle)
    }
    useLayoutEffect(()=> {
        if (toggle){
            gsap.to(dropdownRef.current, {height: 'auto', duration:0.3, ease: "power1.Out"})
        }
        else{
            gsap.to(dropdownRef.current, {height: '0', duration:0.3, ease: "power1.in"})
        }
       
        
    })

    
    useEffect(() => {


        if (screenWidth < 1500) 
        {
             console.log(screenWidth, "ovo je screen width")
            hamburgerButton.current.style.width = "30px";

            // hamburgerMenuRef.current.style.width = "0";
            // hamburgerButton.current.style.display = "none"
        }
        else {
            hamburgerButton.current.style.width = "0px"
        }
    },[screenWidth])
    

    function handleMouseEnter(){
        console.log(" u hovered");
        setToggle(true);
    }
    
    function handleMouseLeave(){
        console.log("u left")
        setToggle(false);
    }





    return ( 
        <div  className="header-main-div" >
            <img className="image" src="/resources/arrow-left.png" alt="logo" />
            <div ref={hamburgerMenuRef} className="hamburger-menu-div" >
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <div onMouseEnter={handleMouseEnter} onClick={handleMouseClick} onMouseLeave={handleMouseLeave} className="services">Services</div>
            </div>
            <div className="menu-div" >
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <div onMouseEnter={handleMouseEnter} onClick={handleMouseClick} onMouseLeave={handleMouseLeave} className="services">Services</div>
            </div>
            <div ref={dropdownRef} className="dropdown-menu">
                    <a className="service-button" href="/random">Service 1</a>
                    <a className="service-button" href="/random">Service 2</a>
                    <a className="service-button" href="/random">Service 3</a>
                    <a className="service-button" href="/random">Service 4</a>
                    <a className="service-button" href="/random">Service 5</a>
                    <a className="service-button" href="/random">Service 6</a>
            </div>
            <img  ref={hamburgerButton} src="/resources/arrow-left.png" className="hamburger-svg" alt="menu" ></img>
        </div>
    );
}


export default TransparentHeader;




// if(availableWidth > 700){
//     gsap.to(hamburgerMenuRef.current, {width: 'auto', duration:0.3, ease: "power1.Out"})
// }
// else{
//     gsap.to(hamburgerMenuRef.current, {width: '0', duration:0.3, ease: "power1.in"})

// }