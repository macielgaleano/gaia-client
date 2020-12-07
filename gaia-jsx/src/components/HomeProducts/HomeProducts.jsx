import React from "react";
import NavbarGaia from "../Nav/Nav";
import Header from "./Header";
import ListOfProducts from "./ListOfProducts";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div>
      <NavbarGaia></NavbarGaia>
      <Header></Header>
      <ListOfProducts></ListOfProducts>
      <Footer />
    </div>
  );
}
