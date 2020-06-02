import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import $ from "jquery";
import "bootstrap";
import Scrollspy from "react-scrollspy";
import { Link, animateScroll as scroll } from "react-scroll";


import "./Navbar.css"

export class MyNavBar extends Component {

    constructor(props) {
        super(props);
        this.links = [
            { name: "HOME", ref: "home" },
            { name: "RESUME", ref: "" },
            { name: "ABOUT", ref: "about" },
            { name: "PROJECTS", ref: "projects" },
            { name: "CONTACT", re: "contact" }
        ];
    }

    componentDidMount() {
        const nav = $('nav');
        let navHeight = nav.outerHeight();

        $('.navbar-toggler').on('click', function () {
            if (!$('#mainNav').hasClass('navbar-reduce')) {
                $('#mainNav').addClass('navbar-reduce');
            }
        })

        $('body').scrollspy({
            target: '#mainNav',
            offset: navHeight
        });

        $('.js-scroll').on("click", function () {
            $('.navbar-collapse').collapse('hide');
        });

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 50) {
                document.querySelector('.navbar-expand-md').classList.add('navbar-reduce');
                document.querySelector('.navbar-expand-md').classList.remove('navbar-trans');
                //this.setState({ logo: logo2 });
            } else {
                document.querySelector('.navbar-expand-md').classList.add('navbar-trans');
                document.querySelector('.navbar-expand-md').classList.remove('navbar-reduce');
                //this.setState({ logo: logo1 });
            }
        });

        $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
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
        });

        $('.js-scroll').on("click", function () {
            $('.navbar-collapse').collapse('hide');
        });
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <div>
                <Navbar className="navbar-b navbar-trans fixed-top" id="mainNav" collapseOnSelect expand="md">
                    <div className="container">
                        <Navbar.Brand className="home-style">themrcesi</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarDefault" />
                        <Navbar.Collapse className="justify-content-end" id="navbarDefault">
                                {this.links.map((link, key) => {
                                    console.log(link);
                                    return (
                                        link.name === "Resume" ?
                                            <Nav.Item key={key}>
                                                <Nav.Link>
                                                    {link.name}
                                                </Nav.Link>
                                            </Nav.Item> :
                                            <Nav.Item key={key}>
                                                <Nav.Link className="js-scroll" href={link.ref}>
                                                    <Link
                                                        activeClass="active"
                                                        to={link.ref}
                                                        spy={false}
                                                        smooth={true}
                                                        //offset={-70}
                                                        duration={1000}
                                                    >
                                                        {link.name}
                                                    </Link>
                                                </Nav.Link>
                                            </Nav.Item>


                                        /**/
                                    );
                                })}
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default MyNavBar;

