import React from 'react';
import { Modal } from 'react-bootstrap';

const ProjectModal = (props) => {
  const { isOpen, onRequestClose, name, featured, description, image, technologies, demo, source } = props;
  return (
    <Modal show={isOpen} onHide={onRequestClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={image} alt={`${name} screenshot`} style={{maxWidth: "100%", height: "auto"}}/>
        <p>{description}</p>
        <p>Featured: {featured ? featured.join(', ') : ''}</p>
        <p>Technologies: {technologies ? technologies.join(', ') : ''}</p>
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
