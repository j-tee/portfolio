import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Carousel } from 'react-bootstrap';
import Navbar from './Navbar';
import ProjectModal from './Modal';
import { projects } from '../../assets/js/project';

function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false);
  const [tonicProject, setTonicProject] = useState(projects);

  const handleTonicClick = (id) => {
    const project = projects.find(project => project.id === id);
    if (project) {
      setTonicProject(project);
      setModalOpen(true);
    }
    setModalOpen(true);
  };
  return (
    <>
      <Navbar />
      <Container fluid className="portfolio-bg-color">
        <Container className='pt-5 pb-5'>
          <Col className="my-0">
            <Carousel className="carousel-container">
              {projects.map(p => (
                <Carousel.Item className='project-slide' key={p.id}>
                  <Card className="p-3">
                    <Row className="d-flex align-items-center justify-content-between flex-column flex-md-row mb-3 mb-md-0">
                      <Col xs={12} md={6} className="order-md-1">
                        <Card.Img variant="top" src={p.image} className="card-img" />
                      </Col>
                      <Col xs={12} md={6} className="order-md-2">
                        <Card.Body>
                          <p>
                            {p.summary}
                          </p>
                          <ul>
                            {p.technologies.map(t => (
                              <li>
                                <Badge bg="primary">{t}</Badge>
                              </li>
                            ))}
                          </ul>
                          <Button
                            id={p.id}
                            onClick={() => handleTonicClick(p.id)}
                            className="light-border"
                            type="submit"
                            variant='primary'
                          >
                            See Project
                          </Button>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Carousel.Item>
              ))}

            </Carousel>
            {/* <Card className="p-3">
              <Row className="d-flex align-items-center justify-content-between flex-column flex-md-row mb-3 mb-md-0">
                <Col xs={12} md={6} className="order-md-1">
                  <Card.Img variant="top" src={require('../../assets/imgs/capstone-1.png')} className="card-img" />
                </Col>
                <Col xs={12} md={6} className="order-md-2">
                  <Card.Body>
                    <p>
                      A clening service company that provides both domestic and
                      commercial cleaning services at very affordable rates
                    </p>
                    <ul>
                      <li>
                        <Badge bg="primary">HTML</Badge>
                      </li>
                      <li>
                        <Badge bg="primary">CSS</Badge>
                      </li>
                      <li>
                        <Badge bg="primary">JavaScript</Badge>
                      </li>
                    </ul>
                    <Button id="tonic"
                      onClick={()=>handleTonicClick('tonic')}
                      className="light-border"
                      type="submit" variant='primary'>See Project</Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card> */}
          </Col>
          {/* <Col className="my-5">
            <Card className="p-3">
              <Row className="d-flex align-items-center justify-content-between flex-md-row flex-column mb-3 mb-md-0">
                <Col xs={12} md={6} className="order-md-2">
                  <Card.Img variant="bottom" src={require('../../assets/imgs/capstone-1.png')} className="card-img" />
                </Col>
                <Col xs={12} md={6} className="order-md-1">
                  <Card.Body>
                    some more text
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col className="my-5">
            <Card className="p-3">
              <Row className="align-items-center flex-column flex-md-row mb-3 mb-md-0">
                <Col xs={12} md={6} className="order-md-1">
                  <Card.Img variant="top" src={require('../../assets/imgs/capstone-1.png')} className="card-img" />
                </Col>
                <Col xs={12} md={6} className="order-md-2">
                  <Card.Body>
                    some more text
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col className="my-5">
            <Card className="p-3">
              <Row className="align-items-center flex-column flex-md-row mb-3 mb-md-0">
                <Col xs={12} md={6} className="order-md-2">
                  <Card.Img variant="bottom" src={require('../../assets/imgs/capstone-1.png')} className="card-img" />
                </Col>
                <Col xs={12} md={6} className="order-md-1">
                  <Card.Text>
                    some text
                  </Card.Text>
                </Col>
              </Row>
            </Card>
          </Col> */}
        </Container>
      </Container>
      <ProjectModal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)} name={tonicProject.name} featured={tonicProject.featured} description={tonicProject.description} image={tonicProject.image} technologies={tonicProject.technologies} demo={tonicProject.demo} source={tonicProject.source} />
    </>
  );
}

export default Portfolio;
