import React, { useState } from 'react';
import Footer from '../footer/Footer';
import { Form, Button } from 'react-bootstrap';
import "./Contact.css"

import { Instagram, GitHub, LinkedIn } from "@material-ui/icons/";


export function Contact(props) {

    const [status, setStatus] = useState("");

    const submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://formspree.io/xlepblnl");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus("SUCCESS");
            } else {
                setStatus("ERROR");
            }
        };
        xhr.send(data);
    };

    return (
        <section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/img/background.jpg)" }}>
            <div className="overlay-mf"></div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="contact-mf">
                            <div id="contact" className="box-shadow-full">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="title-box-2">
                                            <h5 className="title-left">
                                                Send A Message
                                            </h5>
                                        </div>
                                        <div>
                                            <Form onSubmit={submitForm} className="contactForm">
                                                <Form.Group required controlId="exampleForm.ControlInput1">
                                                    <Form.Control id="name" name="name" type="text" placeholder="Your Name" />
                                                </Form.Group>
                                                <Form.Group controlId="exampleForm.ControlInput2">
                                                    <Form.Control required id="email" name="email" type="email" placeholder="Your Email" />
                                                </Form.Group>
                                                <Form.Group controlId="exampleForm.ControlInput3">
                                                    <Form.Control required id="subject" name="subject" type="text" placeholder="Subject" />
                                                </Form.Group>
                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Control required as="textarea" rows="5" placeholder="Message" />
                                                </Form.Group>
                                                <Button variant="primary" type="submit" className="button-a button-big button-rounded">
                                                    Send Message
                                                </Button>
                                            </Form>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="title-box-2 pt-4 pt-md-0">
                                            <h5 className="title-left">
                                                Get in Touch
                                            </h5>
                                        </div>
                                        <div className="more-info">
                                            <p className="lead">
                                                Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.<br />
                                    Simply fill the from and send me an email.
                                            </p>
                                        </div>
                                        <div className="socials">
                                            <ul>
                                                <li><a href="https://github.com/themrcesi" target="_blank" rel="noopener noreferrer"><span className="ico-circle"><GitHub></GitHub></span></a></li>
                                                <li><a href="https://www.linkedin.com/in/césar-garcía-cabeza/" target="_blank" rel="noopener noreferrer"><span className="ico-circle"><LinkedIn></LinkedIn></span></a></li>
                                                <li><a href="https://www.instagram.com/cgcjc/" target="_blank" rel="noopener noreferrer"><span className="ico-circle"><Instagram></Instagram></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
}

export default Contact;