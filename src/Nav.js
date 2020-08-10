import React, { useState, useEffect } from 'react'
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false); 
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);



    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
            className="nav__logo"
            src="https://comapalavra.com.br/wp-content/uploads/2018/04/Netflix-Logo-678x381.png" 
            alt="Netflix Logo"
            />

            <img
            className="nav__avatar"
            src="https://pbs.twimg.com/media/BkBr_j4IUAAyVOu?format=jpg&name=small"
            alt="Netflix Avatar"
            />
        </div>
    );
}
export default Nav
