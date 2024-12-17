import React, { Component } from 'react'
import logo from "./logo.png"
export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-2 border-top bg-primary ">
          <p className="col-md-4 mb-0  text-light">© 2024 Company, Inc</p>

          <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">

            <img src={logo} alt="" height="90" />
          </a>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><a href="/" className="nav-link px-2 text-light">Home</a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2 text-light">Features</a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2 text-light">Pricing</a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2 text-light">FAQs</a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2 text-light">About</a></li>
          </ul>
        </footer>
      </div>
    )
  }
}

export default Footer
