// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Navbar extends Component {

  render() {
    return (
      <div className='sticky-top'><nav className="navbar navbar-expand-lg bg-dark navbar-#2196F3 ">
      <div className="container-fluid">
        <a className="navbar-brand text-white text-decoration-none fw-bold fs-3 pr-2" href="/">NewsHatch</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-#f1f9f6" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-#f1f9f6" href="/about">About</a>
            </li>
          </ul>

          {/* form component search box not needed yet */}
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav></div>
    )
  }
}
