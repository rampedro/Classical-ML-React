import React, {Component} from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import {LinRegress} from './components/lin-regress/linRegress';
import {SVM} from './components/svm/svm';
import {KMeans} from './components/kmeans/kmeans';
import {KMedoids} from './components/kmedoids/kmedoids';
import {NavBar} from './components/navbar/navbar';
import { Container } from 'semantic-ui-react';
import './App.css';


export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <NavBar />
                    <div className='main-content'>
                        <Switch>
                            <Redirect from='/' to='/linear-regression' exact />
                            <Route path='/linear-regression' component={LinRegress} />
                            <Route path='/svm' component={SVM} />
                            <Route path='/k-means' component={KMeans} />
                            <Route path='/k-medoids' component={KMedoids} />
                        </Switch>
                    </div>
                </React.Fragment>
            </BrowserRouter>
        );
    }
};
