import { useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navba from "../components/Navbar";
import CarouselMain from "../components/MainSlider";
import FormMessage from "../components/ContactForm";
import CardInfo from "../components/InfoClubs";
import JumbotronAbout from "../components/About";
import FooterPages from "../components/Footer";
import hola from "../constant/scrollToID";

const Home = () => {
  //const url = `http://localhost:8080/solicitante/${user}`;

  return (
    <>

      <Navba/>
      
      <CarouselMain></CarouselMain>

      <CardInfo></CardInfo>

      <JumbotronAbout></JumbotronAbout>

      <FormMessage></FormMessage>

      <FooterPages></FooterPages>

    </>
  );
};

export default Home;
