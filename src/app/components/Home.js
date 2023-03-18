import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <Container fluid className="hero-container">
        <Row>
          <Col md={6}>
            <div className="hero-text">
              <h1>Welcome to my portfolio</h1>
              <p>I am a React web developer with experience in building beautiful and responsive web applications.</p>
              <button className="btn btn-primary">View Projects</button>
            </div>
          </Col>
          <Col md={6}>
            <div className="hero-image">
              <img src="https://scontent.facc9-1.fna.fbcdn.net/v/t1.6435-9/54212925_2176028732440617_8148463789931495424_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=19026a&_nc_eui2=AeE5cF92PlfjU4Hzq4grPMZEsWVtBQvfMt-xZW0FC98y3wgQMG9TSM5hlMfU4X51jHSB6gKlC_g3NXT2FtpOHTzm&_nc_ohc=7btoQdnAaCIAX-RQZ3K&_nc_ht=scontent.facc9-1.fna&oh=00_AfB8F85y80KlHEEaJbbklKBAf9cA-JPRV0ymqfUqdPfVSQ&oe=64386678" alt="hero" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
