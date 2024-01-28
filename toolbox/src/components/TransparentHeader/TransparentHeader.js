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
        if (screenWidth < 600) {
        console.log(screenWidth, "ovo je screen width");
        hamburgerButton.current.style.display = "block";
        // menuRef.current.style.display = "none"
        // hamburgerMenuRef.current.style.width = "0";
        // hamburgerButton.current.style.display = "none"
        } else {
        hamburgerButton.current.style.display = "none";
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
        <div  ref={menuRef} className="menu-div">
            <div  ref={hamburgerBackButtonRef} className="back-button-hamburger-menu menu-item" onClick={handleHamburgerClick} >Back</div>
            <div className="menu-item" href="/"><p>Home</p></div>
            <div className="menu-item" href="/about"><p>About</p></div>
            <div className="menu-item" href="/contact"><p>Contact</p></div>
            <div
            onMouseEnter={handleMouseEnter}
            onClick={handleMouseClick}
            onMouseLeave={handleMouseLeave}
            className="services menu-item"
            >
            <p>services</p>
            <div ref={dropdownRef} className="dropdown-menu">
            <div className="service-button first-service-button" href="/random">
            Service 1
            </div>
            <div className="service-button" href="/random">
            Service 2
            </div>
            <div className="service-button" href="/random">
            Service 3
            </div>
            <div className="service-button" href="/random">
            Service 4
            </div>
            <div className="service-button" href="/random">
            Service 5
            </div>
            <div className="service-button" href="/random">
            Service 6
            </div>
        </div>
            </div>
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
