import React, {Component} from 'react';
import {Points} from './points'
import {AddPointForm} from './addPointForm';
import {LinRegressChart} from './linRegressChart';
import {LinRegressBackground} from './linRegressBackground';
import { Container } from 'semantic-ui-react';
import './linRegress.css';


export class LinRegress extends Component {
    constructor() {
        super();
        this.state = {
            points: [{x: 1, y: 2}, {x: 2, y: 1}, {x: 3, y: 4}],
            metadata: {
                bestFitLine: [{x: 1, y: 1.33}, {x: 3, y: 3.33}],
                m: 1,
                b: 0.33,
                residual: 0
            },
            toggle: 0
        };
    };

    render() {
        return (
            <div>
                <Container className="lin-regress">
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
                        deletePoint={
                            i => this.setState({
                                    points: this.state.points.filter((_, idx) => i !== idx),
                                    toggle: (this.state.toggle + 1) % 2
                                })
                        }
                    />
                    <LinRegressChart
                        points={this.state.points}
                        bestFitLine={this.state.metadata.bestFitLine}
                    />
                </Container>
                <hr></hr>
                <LinRegressBackground />
            </div>
        );
    }
};