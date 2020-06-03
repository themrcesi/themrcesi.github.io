import React from 'react';

import "./Projects.css"
//import { Card } from 'react-bootstrap';

//ViaDe
/* import viade from process.env.PUBLIC_URL + "/img/viade.png";
import viade_dashboard from process.env.PUBLIC_URL + "/img/viade_dashboard.png";
import viade_upload from process.env.PUBLIC_URL + "/img/viade_uplaod.png";
import viade_myRoutes from process.env.PUBLIC_URL + "/img/viade_myRoutes.png";
import viade_modal from process.env.PUBLIC_URL + "/img/viade_modal.png"; */

//import landing page
//import product from "../img/product.png"; 

class Portfolio extends React.Component {

    constructor(props) {
        super(props);
        this.projects = [
            { title: "Prueba", categories: "Prueba Prueba", mainPicture: "https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg", pictures: ["https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg","https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg"] },
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
                            <div className="work-box" onClick={() => this.isOpen=true}>
                                <a href={this.projects[0].mainPicture} data-lightbox="gallery-vmarine">{/*href={vmarine}*/}
                                    {/* <Card>
                                        <Card.Img className="img-fluid" variant="top" src="https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg" />
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
 */}
                                    <div className="work-img">
                                        <img src={process.env.PUBLIC_URL + "/img/viade"} alt="" className="img-fluid" />
                                    </div>
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
                                                    <span className="ion-ios-plus-outline">Hola</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;