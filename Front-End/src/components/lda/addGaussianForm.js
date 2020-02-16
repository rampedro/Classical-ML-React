import React, {Component} from 'react';
import {Form, Input, Dropdown, Button} from 'semantic-ui-react';
import {PROXY_URL} from '../misc/proxyURL';
import './addGaussianForm.css';

function validNumber(str) {
    let trimmed = str.trim();
    return trimmed.length > 0 && isFinite(trimmed);
};

export async function getMetadata(means, covarianceMatrices) {
    const response = await fetch(PROXY_URL + '/lda', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'means': means,
            'covarianceMatrices': covarianceMatrices
        })
    });

    const metadata = await response.json();
    return metadata;
}

export class AddGaussianForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: '',
            y: '',
            label: null,
            xStatus: '',
            yStatus: '',
            onNewInput: this.props.onNewInput,
            updateMetadata: this.props.updateMetadata,
            means: this.props.means,
            covarianceMatrices: this.props.covarianceMatrices
        };
    };

    async componentDidUpdate(prevProps) {
        if (prevProps.means.length !== this.props.means.length) {
            this.setState({
                means: this.props.means,
                covarianceMatrices: this.props.covarianceMatrices
            });

            const promise = getMetadata(this.props.means, this.props.covarianceMatrices);
            promise.then(metadata => this.state.updateMetadata(metadata));
        }
    };

    render() {
        return (
            <div className='lda__form'>
                <h2><u>Input Gaussian Class</u>:</h2>
                <Form className='xy-form'>
                    <header className="xy-form__row">
                        <Form.Field>
                            <Input  className="xy-form__row__input"
                                    placeholder='X-Coordinate'
                                    value={this.state.x}
                                    onChange={e => {
                                        this.setState({x: e.target.value});
                                        if (validNumber(e.target.value) || e.target.value.length === 0)
                                            this.setState({xStatus: ''});
                                        else
                                            this.setState({xStatus: 'Not a number!'});
                                    }}
                            />
                            <span className='xy-form__row__span'>{this.state.xStatus}</span>
                        </Form.Field>
                    </header>
                    <header className="xy-form__row">
                        <Form.Field>
                            <Input  className="xy-form__row__input"
                                    placeholder='Y-Coordinate'
                                    value={this.state.y}
                                    onChange={e => {
                                        this.setState({y: e.target.value});
                                        if (validNumber(e.target.value) || e.target.value.length === 0)
                                            this.setState({yStatus: ''});
                                        else
                                            this.setState({yStatus: 'Not a number!'});
                                    }}
                            />
                            <span className="xy-form__row__span">{this.state.yStatus}</span>
                        </Form.Field>
                    </header>
                    <Button primary
                            className="add-point"
                            disabled={!(validNumber(this.state.x) && validNumber(this.state.y))}
                            onClick={async () => {
                                let newMean = [
                                    Number(this.state.x), 
                                    Number(this.state.y)
                                ]
                                let newCovMat = [
                                    [1, 0],
                                    [0, 1]
                                ]
                                this.state.onNewInput(newMean, newCovMat);
                                this.setState({
                                    x: '',
                                    y: '',
                                    xStatus: '',
                                    yStatus: ''
                                });
                            }
                    }>
                        Add Mean Vector
                    </Button>
                </Form>
            </div>
        );
    }
};