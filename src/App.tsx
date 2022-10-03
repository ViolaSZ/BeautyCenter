import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.css';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav, NavDropdown, Col, Row } from 'react-bootstrap';
import Main from './pages/Main';
import PageContainer from './components/PageContainer';
import AboutUs from './pages/AboutUs';
import HowToFindUsBlock from './blocks/HowToFindUsBlock';
import Service from './pages/Service';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Promotions from './pages/Promotions';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container>
            <Navbar.Brand href="#home">MagicArea</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Main</Nav.Link>
                <Nav.Link href="/services">Staff and services</Nav.Link>
                <Nav.Link href="/promotions">Promotions</Nav.Link>
                <Nav.Link href="/about">About us</Nav.Link>
                <Nav.Link href="/find">How to find us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Container>
        <Row>
          <Col>
            <PageContainer>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="/services" element={<Service />}/>
                <Route path="/promotions" element={<Promotions />}/>
                <Route path="/find" element={<HowToFindUsBlock />}/>
              </Routes>
            </PageContainer>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
