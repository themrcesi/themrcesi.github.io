import React from "react";

import "./Projects.css";
import { Project } from "./Project";
import { Course } from "./Course";
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
      text:
        "Route management system based on the Solid project created by Tim Berners-Lee.",
      mainPicture: process.env.PUBLIC_URL + "/img/viade.png",
      pictures: [
        process.env.PUBLIC_URL + "/img/viade_dashboard.png",
        process.env.PUBLIC_URL + "/img/viade_upload.png",
        process.env.PUBLIC_URL + "/img/viade_myRoutes.png",
        process.env.PUBLIC_URL + "/img/viade_modal.png",
      ],
      github: "https://github.com/Arquisoft/viade_en1b",
      deploy: "https://arquisoft.github.io/viade_en1b",
    },
    {
      title: "C-- Compiler",
      categories: [
        "Java",
        "ANTLR",
        "Lexical, Syntactical and Semantic Analysis",
        "Programming Language Design",
      ],
      text: "Compiler for the C-- language developed in Java.",
      mainPicture: process.env.PUBLIC_URL + "/img/c--.png",
      pictures: [],
      github: "https://github.com/themrcesi/C--Compiler",
    },
    {
      title: "Final Degree Project",
      categories: [
        "C#",
        "Simulated Annealing",
        "Linear programming",
        "Optimization",
        "Latex",
      ],
      text: "Development of aggregation methods of partially ordered sets.",
      mainPicture: process.env.PUBLIC_URL + "/img/posets.png",
      pictures: [],
      github: "https://github.com/themrcesi/UNIMODE",
    },
    {
      title: "Machine Learning Ranking",
      categories: [
        "Python",
        "Machine Learning",
        "Information Retrieval",
        "LOINC",
        "Learning to Rank"
      ],
      text: "Ranker for the LOINC medical terminology applying machine learning techniques.",
      mainPicture: process.env.PUBLIC_URL + "/img/mlranking.png",
      pictures: [],
      github: "https://github.com/themrcesi/Biomedical-Informatics/tree/main/Machine%20Learning%20Ranking",
    },
    {
      title: "Information Retrieval Engine",
      categories: [
        "Python",
        "Information Retrieval",
        "Word2Vec",
        "Latent Semantic Indexing",
        "Vector Space Model",
        "TFIDF",
        "Fast Text",
        "TREC"
      ],
      text: "Information Retrieval Engine for the CORD-19 corpus.",
      mainPicture: process.env.PUBLIC_URL + "/img/ire.PNG",
      pictures: [],
      github: "https://github.com/themrcesi/Biomedical-Informatics/tree/main/Information%20Retrieval%20Engine",
    },
    {
      title: "Document Classifier",
      categories: [
        "Tf-idf",
        "Gensim",
        "Glossary",
        "Word2Vec",
        "Naive Bayes",
        "NLP",
        "Text Classification",
      ],
      text: "Document Classifier with Glossary implemented in Python.",
      mainPicture: process.env.PUBLIC_URL + "/img/doc_class.png",
      pictures: [
        process.env.PUBLIC_URL + "/img/doc_class_cbow.PNG",
        process.env.PUBLIC_URL + "/img/doc_class_sim.PNG",
        process.env.PUBLIC_URL + "/img/doc_class_reor.PNG",
      ],
      github: "https://github.com/themrcesi/Linguistic-Engineering/tree/main/Documents-Classifier",
    },
    {
      title: "Question-Answer System",
      categories: [
        "Question-Answering",
        "NLP",
        "Python",
        "Information Extraction"
      ],
      text: "Question-Answer System implemented in Python.",
      mainPicture: process.env.PUBLIC_URL + "/img/qa.png",
      pictures: [
        process.env.PUBLIC_URL + "/img/qa_app.png",
        process.env.PUBLIC_URL + "/img/qa_quest.png",

      ],
      github: "https://github.com/themrcesi/Linguistic-Engineering/tree/main/QA-System",
    },
    {
      title: "Computer Vision Exercises",
      categories: [
        "Open CV",
        "Python",
        "Epipolar Geometry",
        "Camera Calibration",
        "Stereo Vision",
        "Image Classification",
        "CNN",
      ],
      text: "Computer vision exercises: from classic techniques to deap learning approaches.",
      mainPicture: process.env.PUBLIC_URL + "/img/cv.PNG",
      pictures: [
        process.env.PUBLIC_URL + "/img/cv_1.PNG",
        process.env.PUBLIC_URL + "/img/cv_1_1.PNG",
        process.env.PUBLIC_URL + "/img/cv_2.PNG",
        process.env.PUBLIC_URL + "/img/cv_2_1.PNG",
        process.env.PUBLIC_URL + "/img/cv_3.PNG",
      ],
      github: "https://github.com/themrcesi/ComputerVision",
    },
    {
      title: "Autonomous Robots",
      categories: [
        "Path planning",
        "Value Iteration",
        "Dijkstra",
        "A*",
        "Depth First Search"
      ],
      text: "Path planning algorithms implementation.",
      mainPicture: process.env.PUBLIC_URL + "/img/robots.jpg",
      pictures: [
        process.env.PUBLIC_URL + "/img/robots_app.PNG",
        process.env.PUBLIC_URL + "/img/robots_output.png",
      ],
      github: "https://github.com/themrcesi/Autonomous-Robots",
    },
  ];

  const courses = [
    {
      title: "Machine Learning, Data Science and Deep Learning with Python",
      subtitle: "Sundog Education by Frank Kane",
      text: "Complete hands-on machine learning tutorial with data science, Tensorflow, artificial intelligence, and neural networks.",
      mainPicture:
        "https://img-a.udemycdn.com/course/240x135/671576_a272_4.jpg",
      link:
        "https://www.udemy.com/course/data-science-and-machine-learning-with-python-hands-on/",
      certificate: process.env.PUBLIC_URL + "/files/udemy_1.pdf",
    },
    {
      title: "Deep Learning Specialization",
      subtitle: "Coursera - Deeplearning.ai",
      text: "Deep Learning is transforming multiple industries. This five-course specialization will help you understand Deep Learning fundamentals, apply them, and build a career in AI.",
      mainPicture:
      process.env.PUBLIC_URL + "/img/dl.png",
      link:
        "https://www.coursera.org/specializations/deep-learning",
      certificate: "https://www.coursera.org/account/accomplishments/specialization/MMUG7U7XD3Q6",
    },
  ];

  return (
    <section id="projects" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Portfolio</h3>
              <p className="subtitle-a">Check Out My Latest Projects.</p>
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
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <p className="subtitle-a">Check Out My Latest Courses.</p>
              <div className="line-mf"></div>
            </div>
          </div>
          {courses.map((course, key) => (
            <div key={key} className="col-md-4">
              <Course course={course}></Course>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
