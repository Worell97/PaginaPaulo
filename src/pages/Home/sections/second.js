import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Produto1 from '../../../assets/produtos/produto1.jpg';
import Produto2 from '../../../assets/produtos/produto2.jpg';
import Produto3 from '../../../assets/produtos/produto3.jpg';
import Produto4 from '../../../assets/produtos/produto4.jpg';
import Produto5 from '../../../assets/produtos/produto5.jpg';
import Produto6 from '../../../assets/produtos/produto6.jpg';

const SecondSection = props => {
    return(
        <CardDeck>
        <Card style={{ width: '18vw' }}>
            <Card.Img variant="top" src={Produto1} />
            <Card.Body>
            <Card.Title>Produto 1</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src={Produto2} />
            <Card.Body>
            <Card.Title>Produto 2</Card.Title>
            <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src={Produto3} />
            <Card.Body>
            <Card.Title>Produto 3</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src={Produto4} />
            <Card.Body>
            <Card.Title>Produto 4</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src={Produto5} />
            <Card.Body>
            <Card.Title>Produto 5</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src={Produto6} />
            <Card.Body>
            <Card.Title>Produto 6</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        </CardDeck>
    );
}

export default SecondSection;