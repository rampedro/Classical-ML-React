import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {LinRegress} from './components/lin-regress/linRegress';
import {NavBar} from './components/navbar/navbar';
import {HomePage} from './components/home/homePage';
import {Testing} from './components/testing/testing';
import {Patterns} from './components/patterns/patterns';

import { ReadData, Example } from './components/readData/readData';



import './App.css';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <NavBar />
                    <div className='main-content'>
                        <Switch>
                            <Route path='/patterns' component={Patterns} />
                            <Route path='/dataFetch' component={ReadData} />
                            <Route path='/test' component={Testing} />
                            <Route path='/linear-regression' component={LinRegress} />
                            <Route path='/' component={HomePage} />
                            
                            
                        </Switch>
                    </div>
                    
                    
                </React.Fragment>
            </BrowserRouter>
        );
    }
};
