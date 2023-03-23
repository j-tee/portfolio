/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { Badge, Modal } from 'react-bootstrap';

const ProjectModal = (props) => {
  const {
    isOpen, onRequestClose, name, featured, description, image, technologies, demo, source,
  } = props;
  return (
    <Modal show={isOpen} onHide={onRequestClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={image} alt={`${name} screenshot`} style={{ maxWidth: '100%', height: 'auto' }} />
        <p className="fs-5 border p-3 rounded mt-2 text-center">
          {description}
        </p>
        <ul className="list-inline">
          <li className="list-unstyled">Featured:</li>
          {featured ? featured.map((f, i) => (
            <li className="list-unstyled list-group-item" key={i}>
              <Badge bg="primary">{f}</Badge>
            </li>
          )) : ''}
        </ul>
        <ul className="list-inline list-group-horizontal">
          <li className="list-unstyled">Tech Stack:</li>
          {technologies ? technologies.map((t, i) => (
            <li className="list-unstyled" key={i}>
              <Badge bg="primary">{t}</Badge>
            </li>
          )) : ''}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <a href={demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Demo
        </a>
        <a href={source} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" onClick={onRequestClose}>
          Source Code
        </a>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
