import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./TransparentHeader.css"
import { hover } from "@testing-library/user-event/dist/hover";
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import userEvent from "@testing-library/user-event";
import gsap from "gsap";
import { unmountComponentAtNode } from "react-dom";
function TransparentHeader() {
    const dropdownRef = useRef(null)
    const [toggle, setToggle] = useState(false)
    let availWidth = window.screen.availWidth;
    
        
    function handleMouseClick(){
        setToggle(!toggle)
    }
    useLayoutEffect(()=> {
        if (toggle){
            gsap.to(dropdownRef.current, {height: 'auto', duration:0.3, ease: "power1.Out"})
        }
        else{
            gsap.to(dropdownRef.current, {height: '0', duration:0.3, ease: "power1.in"})
            console.log("usracu ti se u zivot kurvo", window.screen.availWidth)
        }
    })

    

    function handleMouseEnter(){
        console.log(" u hovered");
        setToggle(true);
    }
    
    function handleMouseLeave(){
        console.log("u left")
        setToggle(false);
    }





    return ( 
        <div   className="header-main-div" >
            <img src="/resources/arrow-left.png" alt="logo" />
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
        </div>
    );
}


export default TransparentHeader;