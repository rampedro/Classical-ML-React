import React, {Component} from 'react';
import {List, Button, Icon} from 'semantic-ui-react';
import './gaussians.css';

export class Gaussians extends Component {
    constructor(props) {
        super(props);
        this.state = {
            means: this.props.means,
            toggle: this.props.toggle,
            deletePair: this.props.deletePair
        };
    };

    componentDidUpdate(prevProps) {
        if (prevProps.toggle !== this.props.toggle) {
            this.setState(this.props);
        }
    }

    render() {
        return (
            <div className="lda__points">
                <h2><u>Gaussian Class</u>:</h2>
                <div className="lda__points-list">
                    <List>
                    {this.state.means.map((meanVec, i) => {
                        return (
                            <List.Item key={i}>
                                <header className='point-row'>
                                    <span className='point-row__point'>
                                    ({meanVec[0]}, {meanVec[1]})
                                    </span>
                                    <Button className='point-row__delete'
                                        onClick={_ => {
                                            this.state.deletePair(i);
                                        }
                                    }>
                                        <Icon name='close' />
                                    </Button>
                                </header>
                            </List.Item>
                        );
                    })}
                    </List>
                </div>
            </div>
        );
    }
};