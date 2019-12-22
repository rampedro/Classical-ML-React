import React, {Component} from 'react';
import './App.css';
import {Points} from './components/points'
import {AddPointForm} from './components/addPointForm';
// import {PerformRegression} from './components/performRegression';
import {LinRegressChart} from './components/linRegressChart';
import { Container } from 'semantic-ui-react';


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            points: [{x: 1, y: 2}, {x: 2, y: 1}, {x: 3, y: 4}],
            metadata: {
                pts: [{x: 1, y: 1.33}, {x: 3, y: 3.33}],
                m: 1,
                b: 0.33,
                residual: 0
            },
            toggle: 0
        };
    };

    render() {
        return (
            <Container>
                <AddPointForm 
                    points={this.state.points}
                    onNewPoint={
                        point => this.setState({
                            points: [...this.state.points, point]
                        })
                    }
                    updateMetadata={
                        newMetadata => this.setState({
                            metadata: newMetadata,
                            toggle: (this.state.toggle + 1) % 2
                        })
                    }
                />
                <Points 
                    points={this.state.points}
                    toggle={this.state.toggle}
                />
                <LinRegressChart
                    points={this.state.points}
                    metadata={this.state.metadata}
                    toggle={this.state.toggle}
                />
            </Container>
        );
    }
};
