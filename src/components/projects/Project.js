import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import FsLightbox from 'fslightbox-react';


export function Project(props) {

    const { title, categories, text, mainPicture, pictures, github, deploy } = props.project;

    const [toggler, setToggler] = useState(false);

    return (
        <Card className="work-box">
            <div onClick={() => setToggler(!toggler)}>
                <div className="work-img">
                    <Card.Img className="img-fluid" variant="top" src={mainPicture} />
                </div>
                <Card.Body className="work-content">
                    <Card.Title className="w-title">{title}</Card.Title>
                    <Card.Subtitle className="w-category">{categories.map((categorie) => categorie + " ")}</Card.Subtitle>
                    <Card.Text>
                        {text}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Link href={github}>Github</Card.Link>
                    {deploy && <Card.Link href={deploy}>Check it out!</Card.Link>}
                </Card.Footer>
            </div>
            <FsLightbox
                toggler={toggler}
                sources={[...pictures, mainPicture]}
            />
        </Card>
    );
};
