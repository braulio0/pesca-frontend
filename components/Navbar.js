import Link from "next/link";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
const logo = "logo_small.png";

const Navba = () => {
  return (
    <Navbar className="fixed-top shadow-lg" collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand className="ml-lg-5" href="#home">
        <a href="#">
          <img
            // className="w-50"
            style={{width : "250px"}}
            src={logo}
            alt="Third slide"
          />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-between w-100 mr-5">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 align-items-lg-center">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Inicio <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link " href="#">
                  Clubs
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link " href="#">
                  Sobre Nosotros
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link " href="#">
                  Contacto
                </a>
              </Link>
            </li>
          </ul>
          <Link href="/Login">
            <a className="btn btn-primary align-self-lg-center">
              Solicitantes
            </a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navba;
