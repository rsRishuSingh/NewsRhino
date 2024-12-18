import './App.css';
import Navbar from './components/Navbar.js';
import News from './components/News.js';
import Footer from './components/Footer.js';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export class App extends Component {
  constructor() {
    super()
    this.state = {
      progress: 0
    }
  }
  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} category="Home" key="general" />} />
            {/* <Route path="/home" element={<News  setProgress={this.setProgress} category="general" key="general" />} /> */}
            <Route path="/business" element={<News setProgress={this.setProgress} category="Business" key="business" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} category="Entertainment" key="entertainment" />} />
            <Route path="/health" element={<News setProgress={this.setProgress} category="Health" key="health" />} />
            <Route path="/science" element={<News setProgress={this.setProgress} category="Science" key="science" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} category="Technology" key="technology" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} category="Sports" key="sports" />} />
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
