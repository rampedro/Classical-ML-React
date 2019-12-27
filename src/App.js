import React, {Component} from 'react';
import './App.css';
import {LinRegress} from './components/lin-regress/linRegress';
import { Container } from 'semantic-ui-react';


export default class App extends Component {
    render() {
        return (
            <Container>
                <LinRegress />
            </Container>
        );
    }
};
