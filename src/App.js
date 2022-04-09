import "./App.css"
import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio1";
import Contact from "./components/Contact/Contact";
import ScrollToTop from './components/Scroll/ScrollToTop';
import ScrollPage from './components/Scroll/ScrollPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  
  return (
    <>
      <Router>
        <ScrollPage />
        <Navbar />
        <ScrollToTop scrollStepInPx="50" delayInMs="30" />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

