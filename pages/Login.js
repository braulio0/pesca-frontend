import { useState } from "react";
import Link from "next/link";

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
  return (
    <>
      <div className="container d-flex justify-content-center">
        <main className=" m-5">
          <h1>Busqueda</h1>
          <form className="row" onSubmit={enviarDatos}>
            <div className="col-md-12">
              <input
                type="text"
                placeholder="Email"
                className="form-control"
                onChange={handleInputChange}
                name="email"
              ></input>
            </div>
          </form>
          <Link
            href={{
              pathname: "/Test",
              query: { object: JSON.stringify(datos) },
            }}
          >
            <a className="btn btn-info m-3 d-flex justify-content-center" role="button">
              Entrar
            </a>
          </Link>
          <Link
            href="/Solicitude"
          >
            <a className="btn btn-success m-3 d-flex justify-content-center" role="button">
              Registrarse
            </a>
          </Link>
        </main>
      </div>
    </>
  );
};

export default Login;
