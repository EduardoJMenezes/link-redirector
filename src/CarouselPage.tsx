import React from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './App.css';

const CarouselPage: React.FC = () => {
  const navigate = useNavigate();
  const handleImageClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5581989338998&text&type=phone_number&app_absent=0');
  };

  return (
    <Container fluid className="d-flex flex-column justify-content-between align-items-center vh-100">
      <Row className="justify-content-center my-3">
        <Col md={8} className="d-flex justify-content-center">
          <img src="/naoseprecipite_modified.png" alt="Não se precipite" className="top-image" />
        </Col>
      </Row>
      <Row className="justify-content-center flex-grow-1">
        <Col md={8} className="d-flex justify-content-center">
          <Carousel className="custom-carousel">
            <Carousel.Item onClick={handleImageClick}>
              <img
                className="d-block w-100"
                src="/CLIQUEAQUI.png"
                alt="Curso Química"
              />
            </Carousel.Item>
            <Carousel.Item onClick={handleImageClick}>
              <img
                className="d-block w-100"
                src="/CLIQUEAQUI.png"
                alt="Curso Química"
              />
            </Carousel.Item>
            <Carousel.Item onClick={handleImageClick}>
              <img
                className="d-block w-100"
                src="/CLIQUEAQUI.png"
                alt="Curso Química"
              />
            </Carousel.Item>
            <Carousel.Item onClick={handleImageClick}>
              <img
                className="d-block w-100"
                src="/CLIQUEAQUI.png"
                alt="Curso Química"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        <Col md={8} className="d-flex justify-content-center">
          <Button variant="primary" onClick={() => navigate(-1)}>Voltar</Button>
        </Col>
      </Row>
      <footer className="py-3 w-100">
        <Container>
          <Row>
            <Col>
              <p>Rodrigo Melo 2024 ©</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </Container>
  );
}

export default CarouselPage;
