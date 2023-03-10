import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        <a className={`navbar-brand text-${props.colorT}`} href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="#"  className={`nav-link active text-${props.colorT}`} aria-current="page">Home</a>
            </li>
            {/* <li className="nav-item">
              <a className={`nav-link text-${props.colorT}`} href="/about">{props.aboutText}</a>
            </li> */}
          </ul>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: props.mode==='dark'?'white':'black'}}>Enable Dark Mode</label>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: "Enter The title",
  aboutText: "Enter about here"
};