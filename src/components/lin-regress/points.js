import React, {Component} from 'react';
import {List, Header, Button, Icon} from 'semantic-ui-react';
import './points.css';

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
            <div className="lin-regress__points">
                <h2><u>Points</u>:</h2>
                <List>
                {this.state.points.map((point, i) => {
                    return (
                        <List.Item key={i}>
                            <Header className='point-row'>
                                <span className='point-row__point'>
                                    ({point.x}, {point.y})
                                </span>
                                <Button className='point-row__delete'
                                    onClick={_ => {
                                        this.state.deletePoint(i);
                                    }
                                }>
                                    <Icon name='close' />
                                </Button>
                            </Header>
                        </List.Item>
                    );
                })}
                </List>
            </div>
        );
    }
};