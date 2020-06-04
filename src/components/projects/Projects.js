import React from 'react';

import "./Projects.css"
import { Project } from './Project';
//import { Card } from 'react-bootstrap';

//ViaDe
/* import viade from process.env.PUBLIC_URL + "/img/viade.png";
import viade_dashboard from process.env.PUBLIC_URL + "/img/viade_dashboard.png";
import viade_upload from process.env.PUBLIC_URL + "/img/viade_uplaod.png";
import viade_myRoutes from process.env.PUBLIC_URL + "/img/viade_myRoutes.png";
import viade_modal from process.env.PUBLIC_URL + "/img/viade_modal.png"; */

//import landing page
//import product from "../img/product.png"; 

export function Portfolio() {

    const projects = [
        {
            title: "ViaDe",
            categories: ["React", "Solid", "Redux", "Leaflet", "Docker", "CI"],
            text: "Route management system based on the Solid project created by Tim Berners-Lee.",
            mainPicture: process.env.PUBLIC_URL + "/img/viade.png",
            pictures: [process.env.PUBLIC_URL + "/img/viade_dashboard.png", process.env.PUBLIC_URL + "/img/viade_upload.png", process.env.PUBLIC_URL + "/img/viade_myRoutes.png", process.env.PUBLIC_URL + "/img/viade_modal.png"],
            github: "https://github.com/Arquisoft/viade_en1b",
            deploy: "https://arquisoft.github.io/viade_en1b"
        },
        {
            title: "C-- Compiler",
            categories: ["Java", "ANTLR", "Lexical, Syntactical and Semantic Analysis", "Programming Language Desing"],
            text: "Compiler for the C-- language developed in Java.",
            mainPicture: process.env.PUBLIC_URL + "/img/c--.png",
            pictures: [],
            github: "https://github.com/themrcesi/C--Compiler",
        },
        {
            title: "Final Degree Project",
            categories: ["C#", "Simulated Annealing", "Linear programming", "Optimization", "Latex"],
            text: "Development of aggregation methods of partially ordered sets.",
            mainPicture: process.env.PUBLIC_URL + "/img/posets.png",
            pictures: [],
            github: "https://github.com/themrcesi/UNIMODE",
            deploy: process.env.PUBLIC_URL + "/files/tfg.pdf"
        },
    ];

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
                    {projects.map((project, key) => (
                        <div key={key} className="col-md-4">
                            <Project project={project}></Project>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;