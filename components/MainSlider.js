import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Carousel.module.css";
const slide1 = "slide1.jpg";
const slide2 = "slide2.jpg";
const slide3 = "slide3.jpg";

class CarouselMain extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0">
                        <Carousel className={styles.shadow}>
                            <Carousel.Item>
                                <img
                                    style={{ height: "95vh" }}
                                    className="d-block w-100"
                                    src={slide1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3 className="h1 font-weight-bold">
                                        Asociación de Pesca México
                                    </h3>
                                    <p className="h5">
                                        Únete a la comunidad más grande de pesca
                                        en todo México.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    style={{ height: "95vh" }}
                                    className="d-block w-100"
                                    src={slide2}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3 className="h1 font-weight-bold">
                                        No Pierdas la Oportunidad
                                    </h3>
                                    <p className="h5">
                                        ¡Adquiere beneficios exclusivos por
                                        registrarte!
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    style={{ height: "95vh" }}
                                    className="d-block w-100"
                                    src={slide3}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3 className="h1 font-weight-bold">
                                        Estamos en toda la República Mexicana
                                    </h3>
                                    <p className="h5">
                                        Integrate a uno de los cientos de clubs
                                        ya existentes
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarouselMain;
