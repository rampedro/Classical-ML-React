import React, {Component} from 'react';
import {Points} from './points'
import {AddPointForm} from './addPointForm';
import {SVMChart} from './svmChart';
import {SVMBackground} from './svmBackground';
import { Container } from 'semantic-ui-react';
import './svm.css';


export class SVM extends Component {
    constructor() {
        super();
        this.state = {
            points: [{x: 1, y: 2, label: 1}, {x: 2, y: 1, label: -1}, {x: 3, y: 4, label: 1}],
            metadata: {
                pts: [{x: 1, y: 1.33}, {x: 3, y: 3.33}],
                accuracy: 66.67
            },
            toggle: 0
        };
    };

    render() {
        return (
            <div>
                <Container className="svm">
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
                    <SVMChart
                        points={this.state.points}
                        metadata={this.state.metadata}
                        toggle={this.state.toggle}
                    />
                </Container>
                <hr></hr>
                <SVMBackground />
            </div>
        );
    }
};