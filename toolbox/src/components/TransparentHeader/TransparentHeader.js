import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useHover } from 'usehooks-ts'
import "./TransparentHeader.css";
import userEvent from "@testing-library/user-event";
import { random } from "gsap";
function TransparentHeader() {
    const dropdownRef = useRef(null);
    const dropdownButtonRef = useRef(null);
    const hamburgerButton = useRef(null);
    const menuRef = useRef(null)
    const hamburgerBackButtonRef = useRef(null)
    const dropdownButtonHover = useHover(dropdownButtonRef);
    const dropdownHover = useHover(dropdownRef);
    const [toggle, setToggle] = useState(false);
    const [hamburger, setHamburger] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    };
    useEffect(() => {
        // console.log("butref is: ", dropdownButtonHover)
        // console.log("dropref is ", dropdownHover)
        let timeoutHandler
        if (dropdownHover || dropdownButtonHover) {
            console.log("toggle je true")
            setToggle(true)
        }
        else {
            console.log("set timeout");
            timeoutHandler = setTimeout(() => {
                console.log("dropref is ", dropdownHover)
                setToggle(false)
                console.log("button je ", dropdownButtonHover)
           }, 500);
        }

        return () => {
            console.log("cleared timeout");
            // clearTimeout(timeoutHandler)
        };
    }, [dropdownHover, dropdownButtonHover, toggle]);

    useEffect(() => {
        window.addEventListener("resize", updateScreenWidth);

        return () => {
            window.removeEventListener("resize", updateScreenWidth);
        };
    }, []);



    function handleHamburgerClick() {
        setHamburger(!hamburger)
    }






    useEffect(() => {
        if (toggle == true && screenWidth < 600) {
            dropdownRef.current.style.transform = 'translateX(-200%)'
        }

        else if (toggle == true && screenWidth >= 600) {
            dropdownRef.current.style.transform = 'translateY(100%)'
        }
        else {
            dropdownRef.current.style.transform = ''
        }
        if (hamburger) {
            menuRef.current.style.transform = 'translateX(-100%)'
            setTimeout(() => {
                console.log("buthov je", dropdownButtonHover[1])
                console.log('drophov je', dropdownHover[1])
            }, 3000);
        }
        else {
            menuRef.current.style.transform = ''

        }
    });

    useEffect(() => {
        if (screenWidth < 600) {
            hamburgerButton.current.style.display = "block";
        } else {
            hamburgerButton.current.style.display = "none";
        }
    }, [screenWidth]);



    return (
        <div className="header-main-div">
            <img className="logo-header" src="/resources/arrow-left.png" alt="logo" />
            <div ref={menuRef} className="menu-div">
                <div ref={hamburgerBackButtonRef} className="back-button-hamburger-menu menu-item" onClick={handleHamburgerClick} >Back</div>
                <div className="menu-item" href="/"><p>Home</p></div>
                <div className="menu-item" href="/about"><p>About</p></div>
                <div className="menu-item" href="/contact"><p>Contact</p></div>
                <div ref={dropdownButtonRef} className="services menu-item">
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
                src="/resources/hamburgerGray.png"
                className="hamburger-svg"
                alt="menu"
            ></img>
        </div>
    );
}

export default TransparentHeader;
