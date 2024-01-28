import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./TransparentHeader.css";
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import userEvent from "@testing-library/user-event";
import gsap from "gsap";
import { unmountComponentAtNode } from "react-dom";
function TransparentHeader() {
    const dropdownRef = useRef(null);
    const hamburgerMenuRef = useRef(null);
    const hamburgerButton = useRef(null);
    const menuRef = useRef(null)
    const hamburgerBackButtonRef = useRef(null)
    const [toggle, setToggle] = useState(false);
    const [hamburger, setHamburger] = useState(false);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", updateScreenWidth);

        return () => {
        window.removeEventListener("resize", updateScreenWidth);
        };
    }, []);

    function handleHamburgerClick(){
        setHamburger(!hamburger)
    }

    function handleMouseClick() {
        setToggle(!toggle);
    }
    useEffect(() => {
        if (toggle) {
        gsap.to(dropdownRef.current, {
            height: "auto",
            duration: 0.3,
            ease: "power1.Out",
        });
        } else {
        gsap.to(dropdownRef.current, {
            height: "0",
            duration: 0.3,
            ease: "power1.in",
        });
        }
        if (hamburger) {
            menuRef.current.style.transform = 'translateX(-100%)'
            // gsap.to(hamburgerMenuRef.current, {
            //     width: "auto",
            //     duration: 0.3,
            //     ease: "power1.Out",
            // });
        }
        else {
            menuRef.current.style.transform = ''
            // gsap.to(hamburgerMenuRef.current, {
            //     width: "0",
            //     duration: 0.3,
            //     ease: "power1.in",
            // });
        }
    });

    useEffect(() => {
        if (screenWidth < 700) {
        console.log(screenWidth, "ovo je screen width");
        hamburgerButton.current.style.width = "30px";
        // menuRef.current.style.display = "none"
        // hamburgerMenuRef.current.style.width = "0";
        // hamburgerButton.current.style.display = "none"
        } else {
        hamburgerButton.current.style.width = "0px";
        // menuRef.current.style.display = ""

        }
    }, [screenWidth]);

    function handleMouseEnter() {
        console.log(" u hovered");
        setToggle(true);
    }

    function handleMouseLeave() {
        console.log("u left");
        setToggle(false);
    }

    return (
        <div className="header-main-div">
        <img className="image" src="/resources/arrow-left.png" alt="logo" />
        <div ref={hamburgerMenuRef} className="hamburger-menu-div">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <div
            onMouseEnter={handleMouseEnter}
            onClick={handleMouseClick}
            onMouseLeave={handleMouseLeave}
            className="services"
            >
            Services
            </div>
        </div>
        <div  ref={menuRef} className="menu-div">
            <a  ref={hamburgerBackButtonRef} className="back-button-hamburger-menu" onClick={handleHamburgerClick} >Back</a>
            <a className="menu-item" href="/">Home</a>
            <a className="menu-item" href="/about">About</a>
            <a className="menu-item" href="/contact">Contact</a>
            <div
            onMouseEnter={handleMouseEnter}
            onClick={handleMouseClick}
            onMouseLeave={handleMouseLeave}
            className="services"
            >
            Services
            </div>
        </div>
        <div ref={dropdownRef} className="dropdown-menu">
            <a className="service-button" href="/random">
            Service 1
            </a>
            <a className="service-button" href="/random">
            Service 2
            </a>
            <a className="service-button" href="/random">
            Service 3
            </a>
            <a className="service-button" href="/random">
            Service 4
            </a>
            <a className="service-button" href="/random">
            Service 5
            </a>
            <a className="service-button" href="/random">
            Service 6
            </a>
        </div>
        <img
            ref={hamburgerButton}
            onClick={handleHamburgerClick}
            src="/resources/arrow-left.png"
            className="hamburger-svg"
            alt="menu"
        ></img>
        </div>
    );
}

export default TransparentHeader;

//     gsap.to(hamburgerMenuRef.current, {width: 'auto', duration:0.3, ease: "power1.Out"})
// }
// else{
//     gsap.to(hamburgerMenuRef.current, {width: '0', duration:0.3, ease: "power1.in"})

// }
