import React from 'react';

import "./Projects.css"
import { Card } from 'react-bootstrap';

/* //import vmarine
import vmarine from "../img/Vmarine.jpg";
import vmarine1 from "../img/vmarine-1.png";
import vmarine2 from "../img/vmarine-2.png";
import vmarine3 from "../img/vmarine-3.png";
import vmarine4 from "../img/vmarine-4.png";
import vmarine5 from "../img/vmarine-5.png";
import vmarine6 from "../img/vmarine-6.png";
import vmarine7 from "../img/vmarine-7.png";

//aguadeluz pics
import aguaDeLuz from "../img/aguaDeLuz.png";
import aguaDeLuz1 from "../img/aguaDeLuz-1.png";
import aguaDeLuz2 from "../img/aguaDeLuz-2.png";
import aguaDeLuz3 from "../img/aguaDeLuz-3.png";
import aguaDeLuz4 from "../img/aguaDeLuz-4.png";

//import todo
import todoList from "../img/todolist.png";
import todoList1 from "../img/todo-1.png";
import todoList2 from "../img/todo-2.png";
import todoList3 from "../img/todo-3.png";

//import amtbw
import amtbw from "../img/amtbw.png";

//import medlingos
import medlingos from "../img/medlingos.jpg";
import medlingos1 from "../img/medlingos-1.jpg";
import medlingos2 from "../img/medlingos-2.jpg";
import medlingos3 from "../img/medlingos-3.jpg";
import medlingos4 from "../img/medlingos-4.jpg";

//import landing page
import product from "../img/product.png"; */

class Portfolio extends React.Component {

    constructor(props) {
        super(props);
        this.projects = [
            { title: "Prueba", categories: "Prueba Prueba", mainPicture: "", pictures: [] },
        ];
    };

    render() {
        return (
            <section id="projects" className="portfolio-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a">
                                    Portfolio
                    </h3>
                                <p className="subtitle-a">
                                    Check Out My Latest Projects.
                    </p>
                                <div className="line-mf"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="work-box">
                                <a href="https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg" data-lightbox="gallery-vmarine">{/*href={vmarine}*/}
                                    <Card>
                                        <Card.Img variant="top" src="https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg" />
                                        <Card.Body>
                                            <Card.Title>ViaDe</Card.Title>
                                            <Card.Subtitle>React SOLID Redux Leaflet</Card.Subtitle>
                                            <Card.Text>
                                                This is a longer card with supporting text below as a natural lead-in to
                                                additional content. This content is a little bit longer.
                                            </Card.Text>
                                            <Card.Link href="https://github.com/Arquisoft/viade_en1b">Github</Card.Link>
                                            <Card.Link href="#">Check it out!</Card.Link>
                                        </Card.Body>
                                    </Card>

                                    {/* <div className="work-img">
                                                                 <img src={vmarine} alt="" className="img-fluid"/>
 ºººº                               </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Vmarine</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">HTML5  CSS3  Bootstrap  Webpack  Wordpress  MySQL  ReactJS</span><span className="w-date">18 Sep. 2018</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="w-like">
                                                    <span className="ion-ios-plus-outline"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </a>
                                <a href={"https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg"} data-lightbox="gallery-vmarine" style={{ display: "none" }}>jsx-a11y/anchor-has-content warning</a>
                                <a href="https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg" data-lightbox="gallery-vmarine" style={{ display: "none" }}>jsx-a11y/anchor-has-content warning</a>
                                <a href="https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg" data-lightbox="gallery-vmarine" style={{ display: "none" }}>jsx-a11y/anchor-has-content warning</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;