import React, {Component} from "react";
import {Row, Container, Col} from "reactstrap";
import Product from "./Product";

class Shop extends Component {
    constructor(props) {
        super(props);

        props.products.All().then((products) => {
          console.log(products)
        });
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="4">
                            <Product name="Product 1"/>
                        </Col>
                        <Col md="4">
                            <Product name="Product 2"/>
                        </Col>
                        <Col md="4">
                            <Product name="Product 3"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Shop;
