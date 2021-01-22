import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";
import styles from '../styles/Login.module.css';

const Login = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log("enviando datos..." + datos.nombre + " " + datos.apellido);
  };

  const divStyle = {
    height: '100vh',
    zIndex: '3',
    position: 'relative'
  };

  return (
    <>

      <section className={styles.bg}>
        <div class="container d-flex justify-content-center align-items-center" style={divStyle}>
          <main class="p-5 border border-dark shadow-lg bg-transparent rounded rounded-lg">
            <h1 className="text-center display-4 font-weight-bold pt-5 pb-5 text-white">🎣 Integrantes</h1>
            <form className="row" onSubmit={enviarDatos}>
              <div className="col-md-12">
                <input
                  // required
                  type="text"
                  placeholder="Email"
                  className="form-control"
                  onChange={handleInputChange}
                  name="email"
                ></input>
              </div>

              <div className="col-12 pb-5">

                <Link
                  href={{
                    pathname: "/Test",
                    query: { object: JSON.stringify(datos) },
                  }}
                >
                  <a className="btn btn-outline-info my-3 d-flex justify-content-center" role="button">
                    Buscar
                  </a>
                </Link>

                {/* <a className="btn btn-outline-info my-3 d-flex justify-content-center w-100" href={{ pathname: "/Test", query: { object: JSON.stringify(datos) }, }}>
                Buscar
              </a> */}

                <a className="btn btn-outline-success my-3 d-flex justify-content-center" type="button" href="/Solicitude">
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
