import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import $ from "jquery";
import "bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";

import "./Navbar.css";

export class MyNavBar extends Component {
  constructor(props) {
    super(props);
    this.links = [
      { name: "HOME", ref: "home" },
      { name: "ABOUT", ref: "about" },
      { name: "EXPERIENCE", ref: "timeline" },
      { name: "PORTFOLIO", ref: "projects" },
      { name: "CONTACT", ref: "contact" },
      { name: "RESUME", ref: "/files/cv.pdf" },
    ];
  }

  componentDidMount() {
    $(".navbar-toggler").on("click", function () {
      if (!$("#mainNav").hasClass("navbar-reduce")) {
        $("#mainNav").addClass("navbar-reduce");
      }
    });

    $(".js-scroll").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        document.querySelector("#mainNav").classList.add("navbar-reduce");
        document.querySelector("#mainNav").classList.remove("navbar-trans");
        //this.setState({ logo: logo2 });
      } else {
        document.querySelector("#mainNav").classList.add("navbar-trans");
        document.querySelector("#mainNav").classList.remove("navbar-reduce");
        //this.setState({ logo: logo1 });
      }
    });

    /* $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
            if (window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && window.location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - navHeight + 5)
                    }, 1000, "easeInExpo");
                    return false;
                }
            }
        }); */

    $(".js-scroll").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div>
        <Navbar
          className="navbar-b navbar-trans fixed-top"
          id="mainNav"
          collapseOnSelect
          expand="md"
        >
          <div className="container">
            <Navbar.Brand className="home-style">themrcesi</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarDefault" />
            <Navbar.Collapse className="justify-content-end" id="navbarDefault">
              {this.links.map((link, key) => {
                return link.name === "RESUME" ? (
                  <Nav.Item key={key}>
                    <Nav.Link
                      className="js-scroll"
                      target="blank"
                      href={link.ref}
                    >
                      <a>{link.name}</a>
                    </Nav.Link>
                  </Nav.Item>
                ) : (
                  <Nav.Item key={key}>
                    <Nav.Link className="js-scroll">
                      <Link
                        activeClass="current-navlink"
                        to={link.ref}
                        spy={true}
                        smooth={true}
                        //offset={-70}
                        duration={1000}
                      >
                        {link.name}
                      </Link>
                    </Nav.Link>
                  </Nav.Item>
                );

                /**/
              })}
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default MyNavBar;
