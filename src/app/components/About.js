/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import React from 'react';
import {
  Container, Row, Col, Image,
} from 'react-bootstrap';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Navbar />
      <Container fluid className="about-me">
        <Row className="justify-content-center">
          <Col xs={12} sm={4} className="text-center">
            <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: '2', delay: '1' }}>
              <Image
                src={require('../../assets/imgs/teejay1.png')}
                roundedCircle
              />
            </motion.div>
            <motion.h3 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: '2', delay: '1' }}>
              Julius Tetteh
            </motion.h3>
            <motion.p initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: '2', delay: '1' }}>
              Full Stack Web Developer
            </motion.p>
          </Col>
          <Col xs={12} sm={8} className="p-5">
            <motion.h2 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: '2', delay: '1' }}>About Me</motion.h2>
            <motion.p initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: '2', delay: '1' }}>
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
            </motion.p>
            <motion.p initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: '2', delay: '1' }}>
              If you are interested in working with Julius or have any questions
              regarding his portfolio and experience, please do not hesitate to
              contact him through his website. He would be more than happy to
              discuss potential projects and opportunities.
            </motion.p>

            <motion.h2 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: '2', delay: '1' }}>
              Skills
            </motion.h2>
            <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: '2', delay: '1' }}>
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
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default About;
