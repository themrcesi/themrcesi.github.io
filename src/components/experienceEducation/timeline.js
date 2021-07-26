import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { IoIosSchool } from "react-icons/io";
import { MdWork } from "react-icons/md";

import "./timeline.css";


export default function Timeline() {
  return (
    <section id="timeline" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Work experience & education</h3>
              <p className="subtitle-a">My previous jobs and my qualifications.</p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2016 - 2020"
            iconStyle={{background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<IoIosSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Engineering in Computer Software Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor´s Degree
            </h4>
            <p>Maths, Programming, Software Development</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="September 2019- October 2019"
            iconStyle={{ background: "#0078ff", color: "#fff" }}
            icon={< MdWork/>}
          >
            <h3 className="vertical-timeline-element-title">
              Research Assistant @UNIMODE Research Group
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Internship
            </h4>
            <p><span>Analysis and optimization of algorithms | Development of new algorithms | C#</span></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020 - 2021"
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<IoIosSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Master of Science in Artificial Intelligence
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Master´s Degree
            </h4>
            <p>Machine and Deep Learning, NLP, Information Retrieval, Computer Vision</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April - June (2021)"
            iconStyle={{ background: "#0078ff", color: "#fff" }}
            icon={< MdWork/>}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer @DAIL Software
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Internship
            </h4>
            <p><span>Development of ChatBots (Python + Rasa) | Information Retrieval Engine | Docker</span></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="February 2021 - Present"
            iconStyle={{ background: "#0078ff", color: "#fff" }}
            icon={< MdWork/>}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer @StockFink
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Collaboration
            </h4>
            <p><span>Tasks automation using Python</span></p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}
