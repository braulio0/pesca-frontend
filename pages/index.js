import { useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navba from "../components/Navbar";

const Home = () => {
  //const url = `http://localhost:8080/solicitante/${user}`;

  return (
    <>
      <div>
        <Navba />
      </div>
    </>
  );
};
export default Home;
