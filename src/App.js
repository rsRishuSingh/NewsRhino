import './App.css';
import Navbar from './components/Navbar.js';
import News from './components/News.js';
import Footer from './components/Footer.js';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <News />
          <Routes>
            <Route path="/home"> <News category='general' /> </Route>
            <Route path="/business"> <News category='business' /> </Route>
            <Route path="/entertainment"> <News category='entertainment' /> </Route>
            <Route path="/health"> <News category='health' /> </Route>
            <Route path="/science"> <News category='science' /> </Route>
            <Route path="/technology"> <News category='technology' /> </Route>
            <Route path="/sports"> <News category='sports' /> </Route>
          </Routes>
          <Footer />
        </Router>

      </>
    )
  }
}

export default App

