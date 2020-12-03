import React from "react";
import NavbarGaia from "../Nav/Nav";
import Header from "./Header";
import ListOfProducts from "./ListOfProducts";

export default function Home() {
  return (
    <div>
      <NavbarGaia></NavbarGaia>
      <Header></Header>
      <ListOfProducts></ListOfProducts>
    </div>
  );
}
