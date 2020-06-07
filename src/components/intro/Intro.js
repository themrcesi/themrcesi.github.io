import React from 'react';
import './stars.scss';
import Typed from 'react-typed';

import "./Intro.css"
import { Button } from 'react-bootstrap';
import { Link } from 'react-scroll';

export class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        {/* <div className="overlay-intro"></div> */}
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am César García Cabeza</h1>
              <p className="intro-subtitle"><span className="text-slider-items">
              </span><strong className="text-slider"><Typed strings={["Software Engineer", "Curious about Artificial Intelligence", "Always ready to learn new things"]} typeSpeed={80} backDelay={1100} backSpeed={30} loop /></strong></p>
              <p className="pt-3">
                <Button className="btn-primary js-scroll px-4">
                  <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={1000}
                  >
                    View My Work
                  </Link>
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Intro;
