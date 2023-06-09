import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-primary">
        <div className="container-fluid">
          <NavLink
            to="/portfolio"
            className="nav-link active"
          >
            HOME
          </NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className='nav-item'>
                <NavLink
                  to="/portfolio"
                  className="nav-link active"
                >
                  ABOUT
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to="/service"
                  className="nav-link active"
                >
                  SERVICE
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to="/portfolio"
                  className="nav-link active"
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to="/portfolio"
                  className="nav-link active"
                >
                  CONTACT
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to="/login"
                  className="nav-link active"
                >
                  LOGIN
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
