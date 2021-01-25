import { useState } from "react";
import { Form } from "react-bootstrap";
import styles from "../styles/Login.module.css";
import { Row, Col, Toast, Button } from "react-bootstrap";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Warring from "./../components/SVG/warring";

const Login = () => {
  const router = useRouter();
  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState([]);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState({
    message: "Contrasena erronea",
  });
  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    axios
      .post(
        `http://localhost:8080/Login/${datos.password}/${datos.email}`,
        message,
        axiosConfig
      )
      .then((res) => {
        setUser(res.data);
        console.log(user);
        console.log(res.data.role);
        res.data.role === "USER" &&
          router.replace({
            pathname: "/Test",
            query: { object: JSON.stringify(datos) },
          });
        res.data.role === "ADMI" &&
          router.replace({
            pathname: "/Administrador",
            query: { object: JSON.stringify(datos) },
          });
      })
      .catch((error) => {
        error.response.status === 400
          ? (setMessage({ message: "Password is incorrect" }), setShow(true))
          : (setMessage({ message: "User is not found" }), setShow(true));

        console.log("estas en error error");
        // console.log(JSON.stringify(error));
        console.log(error.response);
        console.log(error);
      });

    console.log("enviando datos..." + datos.nombre + " " + datos.apellido);
  };

  const divStyle = {
    height: "100vh",
    zIndex: "3",
    position: "relative",
  };

  return (
    <>
      <section className={styles.bg}>
        <div
          class="container d-flex justify-content-center align-items-center"
          style={divStyle}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              minHeight: "200px",
            }}
          >
            <Toast
              onClose={() => setShow(false)}
              show={show}
              delay={3000}
              autohide
            >
              <Toast.Header>
                <strong className="mr-auto">Error</strong>
              </Toast.Header>
              <Toast.Body>
                <Warring />
                <h5>{message.message}</h5>
              </Toast.Body>
            </Toast>
          </div>

          <main class="p-5 border border-dark shadow-lg bg-transparent rounded rounded-lg">
            <h1 className="text-center display-4 font-weight-bold pt-5 pb-5 text-white">
              🎣 Integrantes
            </h1>
            <form className="row" onSubmit={enviarDatos}>
              <div className="col-md-12">
                <input
                  // required
                  type="text"
                  placeholder="Email"
                  className="form-control m-2"
                  onChange={handleInputChange}
                  name="email"
                ></input>
                <input
                  // required
                  type="password"
                  placeholder="password"
                  className="form-control m-2"
                  onChange={handleInputChange}
                  name="password"
                ></input>
              </div>
              <button
                type="submit"
                className="btn btn-outline-info my-3 d-flex justify-content-center col-12"
              >
                Enviar
              </button>

              <div className="col-12 pb-5">
                {/* <a className="btn btn-outline-info my-3 d-flex justify-content-center w-100" href={{ pathname: "/Test", query: { object: JSON.stringify(datos) }, }}>
                Buscar
              </a> */}

                <a
                  className="btn btn-outline-success my-3 d-flex justify-content-center"
                  type="button"
                  href="/Solicitude"
                >
                  Registrarse
                </a>
              </div>
            </form>
          </main>
        </div>
      </section>
    </>
  );
};

export default Login;
