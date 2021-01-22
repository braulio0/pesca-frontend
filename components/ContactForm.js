import React from "react";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class FormMessage extends React.Component {
    render() {
        return (
            <div id="contact" className="container py-5">
                <h3 className="display-4 pb-4">Contacto</h3>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Escribe tu correo electrónico" required />
                        <Form.Text className="text-muted">
                            Nunca compartiremos su correo electrónico con nadie.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Escribe tu nombre" />
                    </Form.Group>

                    <Form.Group controlId="formBasicMessage">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Escribe un perro mensaje" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Autorizó a enviar" required />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="px-5">
                        Enviar
                    </Button>
                </Form>
            </div>
        )
    };
}

export default FormMessage;