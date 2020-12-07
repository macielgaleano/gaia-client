import React, { useEffect, useState } from "react";
import "./home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Fade from "react-reveal/Fade";
import Col from "react-bootstrap/Col";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);
  return (
    <div className="bgHeaderImg">
      <div className="bgHeaderData">
        <Container>
          <Row>
            <Col sm={12} col={12} md={12}>
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={500}
                distance="30px"
              >
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img
                    className="img-fluid imageHeader"
                    src={window.location.origin + "/gaia.jpeg"}
                    alt=""
                  />
                  <h1 className="mt-2 text-center">Gaia Diseño y Creaciones</h1>
                  <p className="text-center mr-5 ml-5 referHeader mt-2">
                    Gaia Diseño y Creaciones es un emprendimiento que nace entre nosotras,
                    dos hermanas en la búsqueda de crear lo que más nos gusta.
                  </p>
                  <h4 className="text-center mr-5 ml-5 mt-3">
                    <FaWhatsapp></FaWhatsapp> 092847551 Maga / <FaWhatsapp></FaWhatsapp>{" "}
                    092847551 Valeria
                  </h4>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
