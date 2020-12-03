import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
// import Fade from "react-reveal/Fade";
import Col from "react-bootstrap/Col";

export default function ListOfProducts() {
  const [products, setProducts] = useState({});
  useEffect(() => {
    async function getData() {
      await axios
        .get("http://localhost:9000/productos")
        .then((products) => setProducts(products.data));
    }
    getData();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col md={12} col={12}>
            <h2 className="mt-5 mb-2 text-center">Nuestros productos</h2>
          </Col>
          {products.length > 0 &&
            products.map((product, index) => {
              return (
                <Col col={12} sm={6} md={4} key={index} className="mt-4">
                  <div className="card text-left">
                    <img
                      className="card-img-top img-fluid"
                      src={product.pictures[0]}
                      alt=""
                      style={{
                        maxHeight: "200px",
                        objectFit: "cover",
                        padding: "0 20px",
                      }}
                    />
                    <div className="card-body">
                      <h4 className="card-title" style={{ height: "60px" }}>
                        {product.name}
                      </h4>

                      <p className="card-text" style={{ height: "70px" }}>
                        {product.description}
                      </p>
                      <h3 className="text-info">${product.price}</h3>
                      <button
                        type="button"
                        name=""
                        id=""
                        className="btn btn-success w-100 mt-2"
                      >
                        <Link className="text-white" to={"/producto/" + product.slug}>
                          Ver mas
                        </Link>
                      </button>
                    </div>
                  </div>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
}
