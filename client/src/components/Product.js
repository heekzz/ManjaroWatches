import React, {Component} from 'react';
import {Card, CardTitle, CardBody, CardSubtitle, CardText, Button, CardImg} from "reactstrap";

class Product extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }

    }

    render() {
        return (
            <Card>
                <CardImg width="100%" src="https://placehold.it/200x200" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{this.props.name}</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                    <Button>More Info</Button>
                </CardBody>
            </Card>
        )
    }

}

export default Product;