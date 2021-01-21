import React from "react";
import { Card } from 'react-bootstrap';
import { CardDeck } from 'react-bootstrap';
import { Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const imgClub1 = 'club-pesca1.jpg';
const imgClub2 = 'club-pesca2.jpg';
const imgClub3 = 'club-pesca3.jpg';

class CardInfo extends React.Component {
    render() {
        return (
            <div className="container py-5 my-5">
                <h3 className="display-4 pb-4">Clubes Asociados</h3>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={imgClub1} style={{height : "250px"}} />
                        <Card.Body>
                            <Card.Title>Club "Cielo Negro" de Mazatlán</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                             </Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-between">
                            <button className="btn m-0 h4" data-toggle="tooltip" data-placement="top" title="Valoración">⭐⭐⭐⭐⭐</button>
                            <button className="btn m-0 h4" data-toggle="tooltip" data-placement="top" title="Torneos Oficiales">🎖</button>
                            <button className="btn m-0 h4" data-toggle="tooltip" data-placement="top" title="Protección a especies">🐟</button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={imgClub2} style={{height : "250px"}} />
                        <Card.Body>
                            <Card.Title>Club "Atlantes" de Cancún</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-between">
                            <button className="btn m-0 h4" data-toggle="tooltip" data-placement="top" title="Valoración">⭐⭐⭐⭐⭐</button>
                            <button className="btn m-0 h4" data-toggle="tooltip" data-placement="top" title="Torneos Oficiales">🎖</button>
                            <button className="btn m-0 h4" data-toggle="tooltip" data-placement="top" title="Protección a especies">🐟</button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={imgClub3} style={{height : "250px"}} />
                        <Card.Body>
                            <Card.Title>Club "Esperanza" de Los Cabos</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-between">
                            <button className="btn m-0 h4" data-toggle="tooltip" data-placement="top" title="Valoración">⭐⭐⭐⭐</button>
                            <button className="btn m-0 h4" data-toggle="tooltip" data-placement="top" title="Torneos Oficiales">🎖</button>
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
        )
    };
}

export default CardInfo;


