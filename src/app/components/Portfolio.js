/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import {
  Container, Row, Col, Card, Badge, Button, Carousel,
} from 'react-bootstrap';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import ProjectModal from './Modal';
import { projects } from '../../assets/js/project';

function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false);
  const [tonicProject, setTonicProject] = useState(projects);

  const handleTonicClick = (id) => {
    const project = projects.find((project) => project.id === id);
    if (project) {
      setTonicProject(project);
      setModalOpen(true);
    }
    setModalOpen(true);
  };
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Navbar />
      <Container fluid className="portfolio-bg-color">
        <Container className="pt-5 pb-5">
          <Col className="my-0">
            <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: '2', delay: '1' }}>
              <Carousel className="carousel-container">
                {projects.map((p) => (
                  <Carousel.Item className="project-slide" key={p.id}>
                    <Card className="p-3">
                      <Row className="d-flex align-items-center justify-content-between flex-column flex-md-row mb-3 mb-md-0">
                        <Col xs={12} md={6} className="order-md-1">
                          <Card.Img variant="top" src={p.image} className="card-img" />
                        </Col>
                        <Col xs={12} md={6} className="order-md-2">
                          <Card.Body>
                            <p className="rounded fs-3 border-top border-bottom text-center py-2 mb-5">
                              {p.summary}
                            </p>
                            <ul>
                              {p.technologies.map((t, i) => (
                                <li key={i}>
                                  <Badge bg="primary">{t}</Badge>
                                </li>
                              ))}
                            </ul>
                            <Button
                              id={p.id}
                              onClick={() => handleTonicClick(p.id)}
                              className="light-border"
                              type="submit"
                              variant="primary"
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
            </motion.div>
          </Col>
        </Container>
      </Container>
      <ProjectModal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        name={tonicProject.name}
        featured={tonicProject.featured}
        description={tonicProject.description}
        image={tonicProject.image}
        technologies={tonicProject.technologies}
        demo={tonicProject.demo}
        source={tonicProject.source}
      />
    </motion.div>
  );
}

export default Portfolio;
