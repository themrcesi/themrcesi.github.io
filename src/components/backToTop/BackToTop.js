import React from 'react';
import {FaArrowCircleUp} from 'react-icons/fa'; 
import { Link } from "react-scroll";
import "./BackToTop.css"


class BackToTop extends React.Component {
    componentDidMount(){
        window.addEventListener('scroll', ()=>{
            if(window.pageYOffset > 100){
                document.querySelector('.back-to-top').classList.remove("fadeOut");
                document.querySelector('.back-to-top').style.display = "block";
                document.querySelector('.back-to-top').classList.add("fadeIn");
            }else {
                document.querySelector('.back-to-top').classList.remove("fadeIn");
                document.querySelector('.back-to-top').classList.add("fadeOut");
            }
        });
    }

    render(){
        return <a id="back-to-top" href="#" className="back-to-top animated"><Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        //offset={-70}
        duration={1000}
    >
    ^
    </Link></a>;
    }
}

export default BackToTop;