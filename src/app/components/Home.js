import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';
import { Carousel } from 'react-bootstrap';

function Home() {
  return (
    <>
      <Navbar />
      <Container fluid className="hero-container">
        <Row>
          <Col md={6}>
            <div className="hero-text">
              <h1>Hello, My name is Tetteh Julius (TeeJay)</h1>
              <p>I am a Fullstack web developer and a graduate of Microverse with experience in building beautiful and responsive web applications.</p>

              <button className="btn btn-primary">View Projects</button>
            </div>
          </Col>
          <Col md={6}>
            <div className="hero-image">
              <Carousel className="carousel-container">
                <Carousel.Item className='item'>
                  <p>
                    My experience at Microverse has greatly improved my front-end development skills.
                    I worked on a number of exercises including weekly projects that were focused on front-end technologies such as CSS, javascript, and HTML.
                    I have had experience in other front-end technologies such as react and bootstrap.
                  </p>
                </Carousel.Item>
                <Carousel.Item className='item'>
                  <p>
                    The Microverse experience is a hands-on student-centered program. This approach helped me cultivate relevant
                    skills in researching and learning new concepts.
                    As an online school, learning requires remote collaboration with other students across the globe on various
                    projects. This experience has improved my collaborative and remote working skills,
                  </p>
                </Carousel.Item>
                <Carousel.Item className='item'>
                  <p>
                    My four-year bachelor’s program has been mentally stimulating and provided me with the academic disciplines and
                    the resilience to
                    complete assignments on schedule and according to specific requirements. Having been an active footballer
                    in the past, the experiences of defeat and victory have thought me how to deal with odds and uphill tasks.
                  </p>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
