import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobilMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobilMenu}>
            WisdoMeet
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li classname="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobilMenu}>
                Home
              </Link>
            </li>
            <li classname="nav-item">
              <Link
                to="/courses"
                className="nav-links"
                onClick={closeMobilMenu}
              >
                Courses
              </Link>
            </li>
            <li classname="nav-item">
              <Link to="/notes" className="nav-links" onClick={closeMobilMenu}>
                Notes
              </Link>
            </li>
            <li classname="nav-item">
              <Link
                to="/Sign-up"
                className="nav-links-mobile"
                onClick={closeMobilMenu}
              >
                Sign up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
