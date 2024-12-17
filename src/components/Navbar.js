import React, { Component } from 'react'
import logo from './logo.png'
import {
    Link
} from "react-router-dom";
export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-primary text-light" >
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">NewsRhino</Link>


                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-Link active" aria-current="page" to="/">Home</Link>
                                </li>
                                {/* you can also onClick for each anker tag and then go to App.js and pass category as a prop to news component */}
                                <li className="nav-item">
                                    <Link className="nav-Link active" to="/">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-Link active" to="/">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-Link active" to="/">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-Link active" to="/">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-Link active" to="/">Technology</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-Link active" to="/">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-Link active" to="/"><img src={logo} alt="Bootstrap" width="30" height="25" />
                                    </Link>
                                </li>

                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-light" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div >
        )
    }
}

export default Navbar
