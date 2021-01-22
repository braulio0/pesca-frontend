import React from "react";
import { Jumbotron } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const logo2 = "logo_small_icon_only_inverted.png"

class JumbotronAbout extends React.Component {
    render() {
        return (

            <Jumbotron id="about" fluid className="py-5 my-5">
                <Container className="py-5">
                    <div class="row">
                        <div class="col-12 col-md-6 pb-5 pb-md-0">
                            <h1 className="display-4 pb-4 text-center">🇲🇽 Sobre Nosotros</h1>
                            <blockquote class="blockquote font-italic font-weight-lighter text-justify">
                                <p class="m-0">
                                    La Asociación de Pesca en México busca entre otras cosas, desarrollar una tarea de enseñanza y difusión de la 
                                    Pesca, cuidado del recurso pesquero, promocionar y fomentar el desarrollo de actividades 
                                    deportivas, realizar encuentros y establecer relaciones con otras instituciones afines. 
                                    Es por esto que lo invitamos a sumarse a nuestro esfuerzo, a participar y formar parte de 
                                    la Asociación de Pesca en México, asociándose y acompañándonos.
                                </p>
                            </blockquote> 
                            
                        </div>
                        <div class="col-12 col-md-6 d-flex justify-content-center align-self-center">
                            <img
                                style={{ height: "250px" }}
                                src={logo2}
                                alt="Logo AP"
                            />
                        </div>
                    </div>

                </Container>
            </Jumbotron>

        )
    };
}

export default JumbotronAbout;