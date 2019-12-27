import React, {Component} from 'react';
import {List, Header, Button} from 'semantic-ui-react';

export class Points extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points: this.props.points,
            toggle: this.props.toggle,
            deletePoint: this.props.deletePoint
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
                        <Header>
                            ({point.x}, {point.y})
                            &nbsp;
                            <Button onClick={
                                _ => {
                                    this.state.deletePoint(i);
                                }
                            }>
                                Delete
                            </Button>
                        </Header>
                    </List.Item>
                );
            })}
            </List>
        );
    }
};