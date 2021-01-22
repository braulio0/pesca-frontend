import { Card, CardDeck, Pagination } from "react-bootstrap";
const imgClub1 = "club-pesca1.jpg";
const imgClub2 = "club-pesca2.jpg";
const imgClub3 = "club-pesca3.jpg";

const CardInfo = () =>{
        return (
            <div id="clubs" className="container py-5 my-5">
                <h3 className="display-4 pb-4">Clubes Asociados</h3>
                <CardDeck>
                    <Card>
                        <Card.Img
                            variant="top"
                            src={imgClub1}
                            style={{ height: "250px" }}
                        />
                        <Card.Body>
                            <Card.Title>
                                Club "Cielo Negro" de Mazatlán
                            </Card.Title>
                            <Card.Text>
                                Club "Cielo Negro" se encuentra entre los mas
                                visitados de todo Mazatlán, con una comunidad
                                maravillosa que comparte su pasión por la pesca.
                                </Card.Text>
                          </Card.Body>
                        <Card.Footer className="d-flex justify-content-between">
                            <button
                                className="btn m-0 h4"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Valoración"
                            >
                                ⭐⭐⭐⭐⭐
                            </button>
                            <button
                                className="btn m-0 h4"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Torneos Oficiales"
                            >
                                🎖
                            </button>
                            <button
                                className="btn m-0 h4"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Protección a especies"
                            >
                                🐟
                            </button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img
                            variant="top"
                            src={imgClub2}
                            style={{ height: "250px" }}
                        />
                        <Card.Body>
                            <Card.Title>Club "Atlantes" de Cancún</Card.Title>
                            <Card.Text>
                                Los "Atlantes" son un grupo especial, los
                                visitantes o aquellas personas nuevas en la
                                pesca son bien recibidas año con año por los
                                profesionales.

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-between">
                            <button
                                className="btn m-0 h4"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Valoración"
                            >
                                ⭐⭐⭐⭐⭐
                            </button>
                            <button
                                className="btn m-0 h4"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Torneos Oficiales"
                            >
                                🎖
                            </button>
                            <button
                                className="btn m-0 h4"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Protección a especies"
                            >
                                🐟
                            </button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img
                            variant="top"
                            src={imgClub3}
                            style={{ height: "250px" }}
                        />
                        <Card.Body>
                            <Card.Title>
                                Club "Esperanza" de Los Cabos
                            </Card.Title>
                            <Card.Text>
                                En el club "Esperanza" no solo hice grandes
                                amigos, hice una familia, es de los mejores
                                lugares para conocer amantes de la pesca y
                                practicar a un buen nivel.

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-between">
                            <button
                                className="btn m-0 h4"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Valoración"
                            >
                                ⭐⭐⭐⭐
                            </button>
                            <button
                                className="btn m-0 h4"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Torneos Oficiales"
                            >
                                🎖
                            </button>
                        </Card.Footer>
                    </Card>
                </CardDeck>

                <div className="d-flex justify-content-center pt-4">
                    <Pagination>
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Next />
                    </Pagination>
                </div>
            </div>
        );
    }

export default CardInfo;
