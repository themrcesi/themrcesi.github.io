import React from "react";
import { Card } from "react-bootstrap";

export function Course(props) {
  const {
    title,
    subtitle,
    text,
    mainPicture,
    link,
    certificate,
  } = props.course;

  return (
    <Card>
      <div className="work-img">
        <Card.Img className="img-fluid" variant="top" src={mainPicture} />
      </div>
      <Card.Body className="work-content">
        <Card.Title className="w-title">{title}</Card.Title>
        <Card.Subtitle>
          {subtitle}
        </Card.Subtitle>
        <Card.Text>{text}</Card.Text>
      </Card.Body>

      <Card.Footer>
        <Card.Link target="blank" href={link}>
          Link to course
        </Card.Link>
        {certificate && (
          <Card.Link target="blank" href={certificate}>
            Certificate
          </Card.Link>
        )}
      </Card.Footer>
    </Card>
  );
}
