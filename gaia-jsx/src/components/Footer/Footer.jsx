import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaWhatsapp } from "react-icons/fa";
import { RiRecycleFill } from "react-icons/ri";
import { AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="mt-5 footer">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={4} sm={6} col={6}>
            <h4>
              Gaia creaciones <RiRecycleFill />
            </h4>
            <p>Propiedad intelectual.</p>
            <p>
              <FaWhatsapp /> 092847551 / Maga
              <br />
              <FaWhatsapp /> 092847551 / Valeria
            </p>
          </Col>
          <Col md={4} sm={6} col={6} className="  social-media-footer">
            <p>
              Siguenos en nuestras redes sociales <RiRecycleFill />
            </p>
            <div className="d-flex ">
              <div className="icon-instagram mr-3">
                <AiOutlineInstagram />
              </div>
              <div className="icon-facebook mr-3">
                <AiFillFacebook />
              </div>
            </div>
          </Col>
          <Col md={4} sm={12} col={12} className="seiton">
            <p>
              Desarrollado por SeitonDEV <br />
            </p>

            <p>
              {" "}
              <FaWhatsapp /> 092847551 Maciel Galeano
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
