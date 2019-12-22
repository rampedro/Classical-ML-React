import React, {Component} from 'react';
import {Form, Input, Button} from 'semantic-ui-react';


function validNumber(str) {
    return str.length > 0 && isFinite(str);
};

export class AddPointForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: '',
            y: '',
            xStatus: '',
            yStatus: '',
            onNewPoint: this.props.onNewPoint,
            updateMetadata: this.props.updateMetadata,
            points: this.props.points
        };
    };

    async componentDidUpdate(prevProps) {
        if (prevProps.points.length !== this.props.points.length) {
            this.setState({
                points: this.props.points
            });

            const x = [];
            const y = [];
            this.props.points.map(point => {
                x.push(point.x);
                y.push(point.y);
            });
            
            const response = await fetch('/lin_regress', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'x': x,
                    'y': y
                })
            });

            const metadata = await response.json();
            this.state.updateMetadata(metadata);
        }
    };

    render() {
        return (
            <Form>
                <div style={{display: 'flex'}}>
                    <Form.Field>
                        <Input  placeholder='X-Coordinate'
                                value={this.state.x}
                                onChange={e => {
                                    this.setState({x: e.target.value});
                                    if (!validNumber(e.target.value))
                                        this.setState({xStatus: 'Not a number!'});
                                    else
                                        this.setState({xStatus: ''});
                                }}
                        />
                    </Form.Field>
                    &nbsp;&nbsp;
                    <span style={{color: 'red'}}>{this.state.xStatus}</span>
                </div>
                <div style={{display: 'flex'}}>
                    <Form.Field>
                        <Input  placeholder='Y-Coordinate'
                                value={this.state.y}
                                onChange={e => {
                                    this.setState({y: e.target.value});
                                    if (!validNumber(e.target.value))
                                        this.setState({yStatus: 'Not a number!'});
                                    else
                                        this.setState({yStatus: ''});
                                }}
                        />
                    </Form.Field>
                    &nbsp;&nbsp;
                    <span style={{color: 'red'}}>{this.state.yStatus}</span>
                </div>
                <Button disabled={!(validNumber(this.state.x) && validNumber(this.state.y))}
                        onClick={async () => {
                            this.state.onNewPoint({x: Number(this.state.x), y: Number(this.state.y)});
                            this.setState({
                                x: '',
                                y: '',
                                xStatus: '',
                                yStatus: ''
                            });
                        }
                }>
                    Add Point
                </Button>
            </Form>
        );
    }
};