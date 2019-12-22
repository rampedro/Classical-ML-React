import React, {Component} from 'react';
import {List, Header} from 'semantic-ui-react';

export class Points extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points: this.props.points,
            toggle: this.props.toggle
        };
    };

    componentDidUpdate(prevProps) {
        if (prevProps.toggle !== this.props.toggle) {
            this.setState(this.props);
        }
    }

    render() {
        return (
            <List>
            {this.state.points.map((point, i) => {
                return (
                    <List.Item key={i}>
                        <Header>({point.x}, {point.y})</Header>
                    </List.Item>
                );
            })}
            </List>
        );
    }
};