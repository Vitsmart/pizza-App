import React from "react";
import { Link, Outlet } from "react-router-dom";
import teamlogo from './images/teamlogo.jpg'
const Navigation = () => {

    return (
    <div>
    <nav className="nav">
            <img
              src={teamlogo}
              alt="Noble logo"
              className="nav__logo"
              id="logo"
            />
            <ul className="nav__links">
              <li className="nav__item">
                <Link className="nav__link" to="/Projects">Projects</Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/Community">Community Life</Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/testimonials">Testimonials</Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link nav__link--btn btn--show-modal" to="/sign-up"
                  >Register</Link>
                
              </li>
            </ul>
          </nav>
          <Outlet />
          </div>
)
};


export default Navigation;