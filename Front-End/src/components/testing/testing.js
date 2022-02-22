import React, {Component} from 'react';
import {BackgroundText} from './BackgroundText';
import { Header } from 'semantic-ui-react';
import ChartWeapper from './ChartWrapper';


export class Testing extends Component {
    constructor() {
        super();
        this.state = {
          
        };
    };

    render() {
        return (
            <div>
                <ChartWeapper />
          </div>
        );
    }
};