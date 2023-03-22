/* eslint-disable global-require */
import React from 'react';
import {
  Container, Row, Col, Image,
} from 'react-bootstrap';
import Navbar from './Navbar';

function About() {
  return (
    <>
      <Navbar />
      <Container fluid className="about-me">
        <Row className="justify-content-center">
          <Col xs={12} sm={4} className="text-center">
            <Image
              src={require('../../assets/imgs/teejay1.png')}
              roundedCircle
            />
            <h3>Julius Tetteh</h3>
            <p>Full Stack Web Developer</p>
          </Col>
          <Col xs={12} sm={8} className="p-5">
            <h2>About Me</h2>
            <p>
              Julius Tetteh is a Full Stack Web Developer with experience in
              building web and mobile applications using various languages,
              frameworks, and technologies. He has expertise in both Front-End
              and Back-End technologies, including JavaScript, React, Redux,
              Ruby, Rails, MySQL, and DotNetCore WebAPI, among others. Julius
              has worked on various projects, including SDMS, Math Magician, and
              Todo App, and is currently a mentor at Microverse. Before
              transitioning to web development, he worked as an Investment
              Officer/DBA at Lords and Duchess Investment Ltd and a
              Developer/Instructor at Solarays Update. Julius holds a degree in
              Computer Science from Regent University College of Science and
              Technology.
            </p>
            <p>
              If you are interested in working with Julius or have any questions
              regarding his portfolio and experience, please do not hesitate to
              contact him through his website. He would be more than happy to
              discuss potential projects and opportunities.
            </p>

            <h2>Skills</h2>
            <ul>
              <li>
                Front-End: JavaScript, React, Redux, jQuery, HTML5, CSS3,
                Angular, TypeScript.
              </li>
              <li>
                Back-End: Ruby, Rails, MySQL, MSSQL, DotNetCore WebAPI, C#,
                EntityFramework, URF.
              </li>
              <li>
                Tools & Methods: Git, GitHub, Heroku, Netlify, Mobile/Responsive
                Development, RSpec, TDD, Chrome Dev Tools.
              </li>
              <li>
                Professional: Remote Pair-Programming, Teamwork, Mentoring.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
