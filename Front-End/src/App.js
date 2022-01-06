import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {LinRegress} from './components/lin-regress/linRegress';
import {SVM} from './components/svm/svm';
import {KMeans} from './components/kmeans/kmeans';
import {KMedoids} from './components/kmedoids/kmedoids';
import {LDA} from './components/lda/lda';
import {NavBar} from './components/navbar/navbar';
import {HomePage} from './components/home/homePage';
import {Testing} from './components/testing/testing';
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
                            <Route path='/readData' component={ReadData} />
                            <Route path='/test' component={Testing} />
                            <Route path='/linear-regression' component={LinRegress} />
                            <Route path='/svm' component={SVM} />
                            <Route path='/k-means' component={KMeans} />
                            <Route path='/k-medoids' component={KMedoids} />
                            <Route path='/lda' component={LDA} />
                            <Route path='/' component={HomePage} />
                            
                            
                        </Switch>
                    </div>
                </React.Fragment>
            </BrowserRouter>
        );
    }
};
