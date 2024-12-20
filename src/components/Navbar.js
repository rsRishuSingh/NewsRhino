import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

    let [activeCategory, setActiveCategory] = useState('Home')



    // Method to set the active category when a category is clicked
    let handleCategoryClick = (category) => {
        setActiveCategory(category)
    }
    return (

        <nav className="navbar navbar-expand-lg bg-primary text-light fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" onClick={() => handleCategoryClick('Home')}>
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
                                style={{ textDecoration: activeCategory === 'Home' ? 'underline' : 'none' }}
                                onClick={() => handleCategoryClick('Home')}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/business"
                                style={{ textDecoration: activeCategory === 'Business' ? 'underline' : 'none' }}
                                onClick={() => handleCategoryClick('Business')}
                            >
                                Business
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/entertainment"
                                style={{ textDecoration: activeCategory === 'Entertainment' ? 'underline' : 'none' }}
                                onClick={() => handleCategoryClick('Entertainment')}
                            >
                                Entertainment
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/health"
                                style={{ textDecoration: activeCategory === 'Health' ? 'underline' : 'none' }}
                                onClick={() => handleCategoryClick('Health')}
                            >
                                Health
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/science"
                                style={{ textDecoration: activeCategory === 'Science' ? 'underline' : 'none' }}
                                onClick={() => handleCategoryClick('Science')}
                            >
                                Science
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/technology"
                                style={{ textDecoration: activeCategory === 'Technology' ? 'underline' : 'none' }}
                                onClick={() => handleCategoryClick('Technology')}
                            >
                                Technology
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/sports"
                                style={{ textDecoration: activeCategory === 'Sports' ? 'underline' : 'none' }}
                                onClick={() => handleCategoryClick('Sports')}
                            >
                                Sports
                            </Link>
                        </li>

                    </ul>
                    <form className="d-flex" role="search" id="searchForm">
                        <input className="form-control me-2" style={{ borderRadius: '20px' }} type="search" id="searchInput" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light" style={{ borderRadius: '20px' }} type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    );
}


export default Navbar;
