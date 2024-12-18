import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCategory: 'Home' // Track the active category
        };
        // console.log(this.state.activeCategory === 'general')
    }



    // Method to set the active category when a category is clicked
    handleCategoryClick = (category) => {
        this.setState({ activeCategory: category });
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-primary text-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/" onClick={() => this.handleCategoryClick('Home')}>
                            NewsRhino
                        </Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link "
                                        to="/"
                                        style={{ textDecoration: this.state.activeCategory === 'Home' ? 'underline' : 'none' }}
                                        onClick={() => this.handleCategoryClick('Home')}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/business"
                                        style={{ textDecoration: this.state.activeCategory === 'Business' ? 'underline' : 'none' }}
                                        onClick={() => this.handleCategoryClick('Business')}
                                    >
                                        Business
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/entertainment"
                                        style={{ textDecoration: this.state.activeCategory === 'Entertainment' ? 'underline' : 'none' }}
                                        onClick={() => this.handleCategoryClick('Entertainment')}
                                    >
                                        Entertainment
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/health"
                                        style={{ textDecoration: this.state.activeCategory === 'Health' ? 'underline' : 'none' }}
                                        onClick={() => this.handleCategoryClick('Health')}
                                    >
                                        Health
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/science"
                                        style={{ textDecoration: this.state.activeCategory === 'Science' ? 'underline' : 'none' }}
                                        onClick={() => this.handleCategoryClick('Science')}
                                    >
                                        Science
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/technology"
                                        style={{ textDecoration: this.state.activeCategory === 'Technology' ? 'underline' : 'none' }}
                                        onClick={() => this.handleCategoryClick('Technology')}
                                    >
                                        Technology
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/sports"
                                        style={{ textDecoration: this.state.activeCategory === 'Sports' ? 'underline' : 'none' }}
                                        onClick={() => this.handleCategoryClick('Sports')}
                                    >
                                        Sports
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
               
            </div>
        );
    }
}

export default Navbar;
