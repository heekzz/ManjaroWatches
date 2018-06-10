import React, { Component } from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Collapse}
    from 'reactstrap';
class Menu extends Component {

    constructor(props) {
        super(props);


        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    links() {
        return this.props.sections.map(function (name, idx) {
            return (
                <NavItem key={idx}>
                    <NavLink href={'#' + name}>{name}</NavLink>
                </NavItem>
            )
        });
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Manjaro Watches</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {this.links()}
                        </Nav>

                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Menu;
