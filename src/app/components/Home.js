/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  Container, Row, Col, Carousel,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container fluid className="hero-container">
        <Row>
          <Col md={6}>
            <div className="hero-text">
              <motion.h1
                className="header-info p-1 text-center"
                initial={{ x: -100, opacity: 0 }}
                whileHover={{ rotateY: 360, repeat: Infinity }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: '2', delay: '1' }}
              >
                Hello, My name is Tetteh Julius (TeeJay)
              </motion.h1>
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: '2', delay: '1' }}
              >
                Julius Tetteh is a Full Stack Web Developer with experience in
                building web and mobile applications using various languages,
                frameworks, and technologies. He has expertise in both Front-End
                and Back-End technologies, including JavaScript, React, Redux,
                Ruby, Rails, MySQL, and DotNetCore WebAPI, among others. Julius
                has worked on various projects, including SDMS, Math Magician,
                and Todo App, and is currently a mentor at Microverse. Before
                transitioning to web development, he worked as an Investment
                Officer/DBA at Lords and Duchess Investment Ltd and a
                Developer/Instructor at Solarays Update. Julius holds a degree
                in Computer Science from Regent University College of Science
                and Technology.
              </motion.p>
              <NavLink to="/portfolio" className="btn btn-primary">
                View Projects
              </NavLink>
            </div>
          </Col>
          <Col md={6}>
            <motion.div
              className="hero-image"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: '2', delay: '1' }}
            >
              <Carousel className="carousel-container">
                <Carousel.Item className="item">
                  <p>
                    At Microverse, I honed my full-stack development skills
                    using CSS, JavaScript, HTML, ReactJS, and Ruby on Rails. I
                    also gained experience with Angular, .NetCore MVC, and
                    various database management systems.
                  </p>
                </Carousel.Item>
                <Carousel.Item className="item">
                  <p>
                    Microverse's student-centered approach helped me develop
                    valuable skills in research and learning. Collaborating with
                    students worldwide on various remote projects also improved
                    my teamwork and remote work abilities.
                  </p>
                </Carousel.Item>
                <Carousel.Item className="item">
                  <p>
                    My bachelor's program stimulated me mentally and taught me
                    discipline and resilience to complete assignments on time
                    and as per requirements. Previous experiences as a
                    footballer taught me how to handle challenging situations.
                  </p>
                </Carousel.Item>
              </Carousel>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Home;
