import React, {Component} from 'react';

import {List, Button, Icon} from 'semantic-ui-react';

export class AddPersonFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            
        };
    };

    makeChange = (e) => {
        this.setState({name : e.target.value});
    }
    

    render() {
        return (
            <g>
            <button onClick={this.makeChange} value="pedram" > click Here</button>
            <div> Click on the button above to appear a name here -- {this.state.name} </div>
            </g>
            
        );
    }
};