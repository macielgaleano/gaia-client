import React, { useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
// import Fade from "react-reveal/Fade";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { actionAddProducts } from "../../Redux/actions/actionAddProducts";

export default function HomePreview() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  useEffect(() => {
    async function getData() {
      await axios
        .get("https://gaia-server.vercel.app/productos")
        .then((products) => dispatch(actionAddProducts(products.data)));
    }
    getData();
  }, [dispatch]);

  return (
    <div>
      <Container>
        <Row>
          <Col md={12} col={12}>
            <h2 className="mt-5 mb-2 text-center">Nuestros productos destacados</h2>
          </Col>
          {products.length > 0 &&
            products.slice(0, 8).map((product, index) => {
              return (
                <Col col={12} sm={6} md={3} key={index} className="mt-4">
                  <div className="card text-left">
                    <img
                      className="card-img-top img-fluid"
                      src={product.pictures[0]}
                      alt=""
                      style={{
                        maxHeight: "180px",
                        height: "180px",
                        objectFit: "cover",
                        padding: "0 20px",
                      }}
                    />
                    <div className="card-body">
                      <h4 className="card-title" style={{ height: "100px" }}>
                        {product.name}
                      </h4>

                      <h3 className="text-info">${product.price}</h3>
                      <Link className="text-white" to={"/producto/" + product.slug}>
                        <button
                          type="button"
                          name=""
                          id=""
                          className="btn btn-success w-100 mt-2"
                        >
                          Ver mas
                        </button>
                      </Link>
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
