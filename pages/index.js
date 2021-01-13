import { useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/Home.module.css";
import Link from "next/link";
const Home = () => {
  //const url = `http://localhost:8080/solicitante/${user}`;

  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
  });

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log("enviando datos..." + datos.nombre + " " + datos.apellido);
  };

  return (
    <main>
      <h1>Busqueda</h1>
      <form className="row" onSubmit={enviarDatos}>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Email"
            className="form-control"
            onChange={handleInputChange}
            name="email"
          ></input>
        </div>
      </form>
      <ul>
        <li>{datos.email}</li>
      </ul>

      <Link
        href={{ pathname: "/Test", query: { object: JSON.stringify(datos) } }}
      >
        <a>
          <button type="button"> Entrar </button>
        </a>
      </Link>
    </main>
  );
};
export default Home;
