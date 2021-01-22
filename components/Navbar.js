import Link from "next/link";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
const logo = "logo_small.png";

const Navba = () => {
  return (
    <Navbar className="fixed-top shadow-lg" collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand className="ml-lg-5">
        <a class="nav-link" href="#home">
          <img
            // className="w-50"
            style={{width : "250px"}}
            src={logo}
          />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-between w-100 mr-5">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0 align-items-lg-center">
            <li class="nav-item">
              <a class="nav-link" href="#home" >
                Inicio <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#clubs">
                Clubs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#about">
                Sobre Nosotros
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#contact">
                Contacto
              </a>
            </li>
          </ul>
          <Link href="/Login">
            <a class="btn btn-primary align-self-lg-center">
              Solicitantes
            </a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navba;
