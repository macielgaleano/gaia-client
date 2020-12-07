import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Fade from "react-reveal/Fade";
import Col from "react-bootstrap/Col";

export default function HomeAbout() {
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
    <div className="about pb-5">
      <Fade
        left={isDesktop}
        bottom={isMobile}
        duration={1000}
        delay={500}
        distance="30px"
      >
        <Container>
          <Row>
            <Col md={12} col={12} sm={12}>
              <h2 className="mt-5 text-center mt-5">Sobre nosotros</h2>
            </Col>
            <Col md={8} col={12} sm={12} className="mx-auto">
              <p className="mt-4 about-text mx-auto">
                <span className="text-success">
                  El Arte y el Diseño combinado con las tres “R”{" "}
                </span>
                <br />
                ♻️Reciclar-Reutilizar-Restaurar <br /> Es una forma amorosa de ayudar,
                desde nuestro lado a nuestra Madre Tierra. Con Gaia queremos cuidar
                nuestras tres casas 🏘 <br /> El planeta 🌎 Nuestro hogar 🏡 Nuestro Cuerpo
                🧿 <br />{" "}
                <span className="text-success">
                  Nace de lo más profundo de nuestro corazón{" "}
                </span>{" "}
                💖 Gaia salió de casa.
              </p>
            </Col>
          </Row>
        </Container>
      </Fade>
    </div>
  );
}
