import React from "react";
import NavbarGaia from "../Nav/Nav";
import Header from "../HomeProducts/Header";
import HomeAbout from "./HomeAbout";
import HomePreview from "./HomePreview";
import Footer from "../Footer/Footer";
import Promo from "./Promo";

export default function Home() {
  return (
    <div>
      <NavbarGaia />
      <Header />
      <Promo></Promo>
      <HomeAbout></HomeAbout>
      <HomePreview></HomePreview>
      <Footer></Footer>
    </div>
  );
}
