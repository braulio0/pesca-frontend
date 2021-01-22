import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormMessage = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (formData) => {
        const user = JSON.stringify(formData);
        console.log(user);
    };
    return (
        <div className="container py-5">
            <h3 className="display-4 pb-4">Contacto</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Escribe tu correo electrónico"
                        required
                        ref={register}
                        name="email"
                    />
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
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Escribe un perro mensaje"
                    />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Autorizó a enviar" />
                </Form.Group>

                <Button variant="primary" type="submit" className="px-5">
                    Enviar
                </Button>
            </Form>
        </div>
    );
};

export default FormMessage;
