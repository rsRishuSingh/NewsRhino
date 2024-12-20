import './App.css';
import Navbar from './components/Navbar.js';
import News from './components/News.js';
import Footer from './components/Footer.js';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App = () => {

  let apiKey = process.env.REACT_APP_NEWS_API;
  let [progress, setProgress] = useState(0);
  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} category="Home" key="general" apiKey={apiKey} />} />
          {/* <Route path="/home" element={<News  setProgress={setProgress} category="general" key="general" />} /> */}
          <Route path="/business" element={<News setProgress={setProgress} category="Business" key="business" />} apiKey={apiKey} />
          <Route path="/entertainment" element={<News setProgress={setProgress} category="Entertainment" key="entertainment" />} apiKey={apiKey} />
          <Route path="/health" element={<News setProgress={setProgress} category="Health" key="health" apiKey={apiKey} />} />
          <Route path="/science" element={<News setProgress={setProgress} category="Science" key="science" apiKey={apiKey} />} />
          <Route path="/technology" element={<News setProgress={setProgress} category="Technology" key="technology" apiKey={apiKey} />} />
          <Route path="/sports" element={<News setProgress={setProgress} category="Sports" key="sports" apiKey={apiKey} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );

}

export default App;
