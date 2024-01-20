import React, { useEffect, useRef, useState } from "react";
import "./TransparentHeader.css"
import { hover } from "@testing-library/user-event/dist/hover";
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import userEvent from "@testing-library/user-event";
import gsap from "gsap";
function TransparentHeader() {
    const dropdownRef = useRef(null)
    const [hover, setHover] = useState(false)
    useEffect(() => {
        if (hover){
            gsap.to(dropdownRef.current, {height: '0', duration:0.3, ease: "power1.inOut"})
        }
        else{
            gsap.from(dropdownRef.current, {height: 'auto', duration:0.3, ease: "power1.inOut"})
        }
    })
    function handleHoverDropdown(){
        console.log(" u hovered");
        setHover(true);
    }
    
    function handleHoverLeave(){
        console.log("u left")
        setHover(false);
    }

    function DrawDropDown() {
        if (hover == true) {
            
        
        }
        
    }



    return ( 
        <div   className="header-main-div" >
            <img src="/resources/arrow-left.png" alt="logo" />
            <div className="menu-div" >
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <div onMouseEnter={handleHoverDropdown} onMouseLeave={handleHoverLeave} className="services">Services</div>
            </div>
            <div ref={dropdownRef} className="dropdown-menu">
                    <a className="service-button" href="/random">Service 1</a>
                    <a className="service-button" href="/random">Service 2</a>
                    <a className="service-button" href="/random">Service 3</a>
                    <a className="service-button" href="/random">Service 4</a>
                    <a className="service-button" href="/random">Service 5</a>
                    <a className="service-button" href="/random">Service 6</a>
            </div>
            {DrawDropDown()}
        </div>
    );
}


export default TransparentHeader;