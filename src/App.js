import React, {Component} from 'react';
import './App.css';
import {LinRegress} from './components/lin-regress/linRegress';
import {SVM} from './components/svm/svm';
import { Container } from 'semantic-ui-react';


export default class App extends Component {
    render() {
        return (
            <Container>
                <SVM />
            </Container>
        );
    }
};
