import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Link } from "react-scroll";
import "./BackToTop.css";

class BackToTop extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        document.querySelector(".back-to-top").classList.remove("fadeOut");
        document.querySelector(".back-to-top").style.display = "block";
        document.querySelector(".back-to-top").classList.add("fadeIn");
      } else {
        document.querySelector(".back-to-top").classList.remove("fadeIn");
        document.querySelector(".back-to-top").classList.add("fadeOut");
      }
    });
  }

  scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    return (
      <Link
        id="back-to-top"
        className="back-to-top animated"
        activeClass="current-navlink"
        to="home"
        spy={true}
        smooth={true}
        //offset={-70}
        duration={1000}
      >
        <FaArrowCircleUp style={{ height: 40 }}></FaArrowCircleUp>
      </Link>
    );
  }
}

export default BackToTop;
