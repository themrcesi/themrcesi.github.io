import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {MyNavBar} from './components/navBar/MyNavBar';
import {Intro} from './components/intro/Intro';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import BackToTop from './components/backToTop/BackToTop';
import Preloader from './components/preloader/Preloader';

import "./style.css";

ReactDOM.render(
  <React.Fragment>
    <MyNavBar></MyNavBar>
    <Intro></Intro>
    <About></About>
    {/* <Projects></Projects>
    <Contact></Contact>
    <BackToTop></BackToTop>
    <Preloader></Preloader> */}
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
