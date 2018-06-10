import React, { Component } from 'react';
import {SectionsContainer, ScrollToTopOnMount, Section, Header} from 'react-fullpage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Menu, Shop} from "./components/Components";
import { gateway as MoltinGateway } from '@moltin/sdk';

const clientId = process.env.REACT_APP_MOLTIN_CLIENT_ID || null;
const clientSecret = process.env.REACT_APP_MOLTIN_CLIENT_SECRET || null;

if (clientId === null){console.log("No client ID found")}
if (clientSecret === null){console.log("No client secret found")}

const Moltin = MoltinGateway({
    client_id: clientId,
    client_secret: clientSecret
});

class App extends Component {

    state = {
        response: ''
    };

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({response: res.express}))
            .catch(err => console.log(err));
        Moltin.Brands.All().then((brands) => {
            console.log(brands)
        });
    }

    callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        let options = {
            sectionClassName:     'section',
            anchors:              ['Shop', 'Cart', 'Checkout'],
            scrollBar:            false,
            navigation:           true,
            verticalAlign:        false,
            sectionPaddingTop:    '50px',
            sectionPaddingBottom: '50px',
            arrowNavigation:      true
        };
        return (
            <div>
                <Header>
                    <Menu sections={options.anchors}/>
                </Header>
                <ScrollToTopOnMount />
                <SectionsContainer className="containers" {...options}>
                    <Section className="custom-section" verticalAlign="true" color="#69D2E7">
                        <Shop products={Moltin.Products}/>
                    </Section>
                    <Section color="#A7DBD8">Page 2</Section>
                    <Section color="#E0E4CC">Page 3</Section>
                </SectionsContainer>
            </div>
        );
    }
}

export default App;
