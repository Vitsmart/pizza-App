import React from "react";
import { Link, Outlet } from "react-router-dom";
import nlogo from './images/icon.png'
const Navigation = () => {

    return (
    <div>
    <nav className="nav">
            <img
              src={nlogo}
              alt="Noble logo"
              className="nav__logo"
              id="logo"
            />
            <ul className="nav__links">
              <li className="nav__item">
                <Link className="nav__link" to="/features">Features</Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/operations">Operations</Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/testimonials">Testimonials</Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link nav__link--btn btn--show-modal" to="/sign-up"
                  >Open account</Link>
                
              </li>
            </ul>
          </nav>
          <Outlet />
          </div>
)
};


export default Navigation;