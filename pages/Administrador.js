import { useState, useEffect } from "react";
import { withRouter } from "next/router";
import axios from "axios";
import ListUser from "./../components/listUsers";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
const logo = "logo_small.png";

const Administrador = () => {
  const [user, setUser] = useState([]);
  const [data, setData] = useState(["PENDING"]);
  const apiGet = (data) => {
    axios.post(`http://localhost:8080/solicitante/${data}`).then(
      (response) => {
        //    console.log(response.data);

        setUser(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  const Aceptados = () => {
    console.log("Rechazados");
    setData("ACCEPTED");
  };
  const Pendiente = () => {
    console.log("Pendiente");
    setData("PENDING");
  };
  const Rechazados = () => {
    console.log("Rechazados");
    setData("REJECTED");
  };

  useEffect(() => {
    apiGet(data);
    console.log(user);
  }, []);
  useEffect(() => {
    console.log(data);
    apiGet(data);
  }, [data]);

  return (
    <>
      <Navbar
        className="fixed-top shadow-lg"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Navbar.Brand className="ml-lg-5">
          <a class="nav-link" href="/">
            <img style={{ width: "250px" }} src={logo} />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-between w-100 mr-5">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0 align-items-lg-center">
              <li class="nav-item">
                <a class="nav-link" href="#home">
                  Inicio
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#clubs" onClick={Pendiente}>
                  Pendientes
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#about" onClick={Aceptados}>
                  Aceptados
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#about" onClick={Rechazados}>
                  Rechazados
                </a>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container m-5 p-5">
        <ListUser data={user} />
      </div>
    </>
  );
};
export default withRouter(Administrador);
