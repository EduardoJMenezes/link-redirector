import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LinkButton from './components/LinkButton';
import CarouselPage from './CarouselPage';
import './App.css';

const App: React.FC = () => {
  const navigate = useNavigate();

  const links = [
    { text: 'REVISÃO PARTICULARES (24-04)', url: 'https://example.com/revisao' },
    { text: 'MATRICULAS CURSO ONLINE 2024', url: 'https://example.com/matriculas' },
    { text: 'LINK DO SITE', url: '/carousel' },
    { text: 'Youtube', url: 'https://youtube.com' },
  ];

  const handleImageClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5581989338998&text&type=phone_number&app_absent=0');
  };

  return (
    <Routes>
      <Route path="/" element={
        <Container fluid className="d-flex flex-column vh-100 text-center">
          <Row className="justify-content-center my-3">
            <Col md={6} className="d-flex flex-column align-items-center">
              <img src="logo.png" alt="Logo" className="mb-4 logo" />
              {links.map((link, index) => (
                <LinkButton key={index} text={link.text} url={link.url} onClick={() => {
                  if (link.url.startsWith('/')) {
                    navigate(link.url);
                  }
                }} />
              ))}
              <LinkButton text="ADQUIRA O CURSO" url="/carousel" onClick={() => navigate('/carousel')} />
            </Col>
          </Row>
          <Row className="justify-content-center my-3 flex-grow-1">
            <Col md={8} className="d-flex justify-content-center align-items-center">
              <Carousel className="custom-carousel">
              {/* <Carousel.Item onClick={handleImageClick}>
                  <img
                    className="d-block w-100"
                    src="/aluno1.png"
                    alt="Curso Química"
                  />
                </Carousel.Item>
                <Carousel.Item onClick={handleImageClick}>
                  <img
                    className="d-block w-100"
                    src="/aluno2.png"
                    alt="Curso Química"
                  />
                </Carousel.Item>
                <Carousel.Item onClick={handleImageClick}>
                  <img
                    className="d-block w-100"
                    src="/aluno3.png"
                    alt="Curso Química"
                  />
                </Carousel.Item>
                <Carousel.Item onClick={handleImageClick}>
                  <img
                    className="d-block w-100"
                    src="/aluno4.png"
                    alt="Curso Química"
                  />
                </Carousel.Item> */}
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
          <footer className="mt-auto py-3 w-100">
            <Container>
              <Row>
                <Col>
                  <p>Rodrigo Melo 2024 ©</p>
                </Col>
              </Row>
            </Container>
          </footer>
        </Container>
      } />
      <Route path="/carousel" element={<CarouselPage />} />
    </Routes>
  );
}

export default App;
