import React from "react";
import "./About.css";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "Java_skill", content: "Machine Learning", value: "50" },
        { id: "Python_skill", content: "Python", value: "85" },
        { id: "C#_skill", content: "Deep Learning", value: "50" },
        { id: "React_skill", content: "NLP", value: "55" },
        { id: "LaTeX_skill", content: "Software Design & Development", value: "80" },
        { id: "analytical", content: "Information Retrieval", value: "50" },
        { id: "solving_skill", content: "Problem solving", value: "80" },
        { id: "Teamwork_skill", content: "Team work", value: "90" },
        { id: "Leadership_skill", content: "Leadership", value: "95" },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Software Engineer with a Master´s Degree in Artificial Intelligence who loves everything related to technology. I am passionate about Data and Artificial Intelligence and particularly all its real-life applications.",
        },
        {
          id: "second-p-about",
          content:
            "Sports and music have always been an essential part of my life, specially Judo!",
        },
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            src={process.env.PUBLIC_URL + "/img/foto.jpg"}
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-7">
                        <div className="about-info">
                          <p>
                            <span className="title-s">Name: </span>{" "}
                            <span>César García Cabeza</span>
                          </p>
                          <p>
                            <span className="title-s">Profile: </span>{" "}
                            <span>Software Engineer (AI)</span>
                          </p>
                          <p>
                            <span className="title-s">Email: </span>{" "}
                            <span>cesar.gar.cabeza@gmail.com</span>
                          </p>
                          <p>
                            <span className="title-s">Phone: </span>{" "}
                            <span>(+34) 648 035 992</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <p className="title-s">Skills</p>
                      {this.state.skills.map((skill) => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right"></span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.value + "%" }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map((content) => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
