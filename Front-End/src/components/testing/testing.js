import React, {Component} from 'react';
import {BackgroundText} from './BackgroundText';
import { Header } from 'semantic-ui-react';
import ChartWrapper from './ChartWrapper';
import AnyWrapper from './AnyWrapper';


export class Testing extends Component {
    constructor() {
        super();
        this.state = {
          
        };
    };

    render() {
        return (
            <div>
                <AnyWrapper />
          </div>
        );
    }
};