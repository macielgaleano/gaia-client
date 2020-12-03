import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../Nav/Nav";

const Product = () => {
  // const dispatch = useDispatch();
  const { slug } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9000/productos/${slug}`)
      .then((data) => data.json())
      .then((data) => {
        setProduct([data]);
      });
  }, [slug]);
  console.log(product);
  return (
    <Container>
      <Nav />
      {/* <FixedCart></FixedCart> */}

      <div
        className="container mt-5 pt-5"
        style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: "400px" }}
      >
        <div>
          <Link to="/" name="" id="" className="text-secondary mb-5">
            <AiOutlineArrowLeft className="mr-1"></AiOutlineArrowLeft>Volver al inicio
          </Link>
          <div className="">
            {product &&
              product.map((product, index) => {
                return (
                  <div key={index}>
                    <div className="row mt-5">
                      <div className="col-md-8 mt-5 mx-auto col-11 col-sm-11">
                        <img
                          className="img-fluid"
                          src={product.pictures[0]}
                          alt=""
                          style={{ objectFit: "fit", width: "100%" }}
                        />
                      </div>
                      <div
                        className="col-md-4 mt-5 col-11 col-sm-11 mx-auto "
                        key={index}
                      >
                        <h1>{product.name}</h1>
                        <p className="mt-2 pt-2">
                          <strong>Descripción:</strong> {product.description}
                        </p>
                        <p className="mt-2 pt-2">
                          <strong>Descripción:</strong> {product.description}
                        </p>

                        <p key={index} className="mt-2 pt-2">
                          <strong>Categoria: </strong>
                          <Link to={`/productos/categoria/${product.category}`}>
                            {product.category ? product.category : "Sin categoria"}
                          </Link>
                        </p>
                        <strong>Materiales: </strong>
                        <ul>
                          {product.materials.map((item, index) => (
                            <li>{item}</li>
                          ))}
                        </ul>
                        <strong className="mb-4">Colores: </strong>
                        <div className="d-flex mb-3 ">
                          {product.colors.map((item, index) => (
                            <div
                              className="mb-2"
                              style={{
                                background: item,
                                color: "white",
                                width: "80px",
                                height: "30px",
                                marginRight: "10px",
                                marginTop: "10px",
                              }}
                            >
                              {item}
                            </div>
                          ))}
                        </div>

                        <p className="mb-2 mt-2">
                          <strong>Tamaño: </strong> {product.size}cm
                        </p>
                        <p className="mb-5">
                          <strong>Precio:</strong> ${product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Product;
