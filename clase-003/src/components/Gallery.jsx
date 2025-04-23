import { Container, Row, Col, Card } from "react-bootstrap";

function Gallery({imagenes}){
    return(
        <Container>
            <h2>Hola galeria</h2>
            <Row>
                {imagenes.map(( url, idx) => (
                    <Col md={4} key={idx} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={url} />
                            <Card.Body>
                                <Card.Text>Imagen {idx + 1}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>     
    )
}

export default Gallery;