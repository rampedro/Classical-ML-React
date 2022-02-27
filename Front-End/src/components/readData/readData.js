import React, { Component, useEffect } from 'react';
import { Header } from 'semantic-ui-react';
import { Points } from './points';
import { LinRegressChart } from './linRegressChart';
import {AddPersonFrom} from './AddPersonFrom'
import { List, Button, Icon } from 'semantic-ui-react';
import './points.css';







export class ReadData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            stateData: 'Empty',
            points: [{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 4 }],
            metadata: {
                bestFitLine: [{ x: 1, y: 1.33 }, { x: 3, y: 3.33 }],
                m: 1,
                b: 0.33,
                residual: 2.67
            },
            toggle: 0

        }
    };


    // Defining a fnction getData to later be useed as getData(url)

    getData = (apiToFetch) => {
        fetch(apiToFetch)
            .then(result => {
                result.json().then(data => {
                    //console.log(data);
                    // Settign the state ( making the changes to be render soon after)
                    this.setState({ stateData: data.loc })

                })
                    .catch((error) => console.log(error.message));
            })
    };


    // Mounting component lets calls the getdata(url)

    componentDidMount() {
        this.getData('http://127.0.0.1:5000/dataFetch');
    }




    // Creating a contact manager form









    render() {
        return (
            <div>
                <Header className='title'
                    size='huge'>

                    *Loading data from Python backend !
                </Header>

                <AddPersonFrom />


                <g>
                    <div className="tester">
                        <div className="lin-regress__points-list">
                            <p>
                                This is just a json example returned from Python BackEnd.
                                {this.state.stateData}



                                
                            </p>


                        </div>


                        <Points
                            points={this.state.points}
                            toggle={this.state.toggle}
                            deletePoint={
                                i => this.setState({
                                    points: this.state.points.filter((_, idx) => i !== idx),
                                    toggle: (this.state.toggle + 1) % 2
                                })
                            }
                        />



                        <LinRegressChart
                            points={this.state.points}
                            bestFitLine={this.state.metadata.bestFitLine}
                        />


                    </div>
                </g>
            </div>
        );
    }
};

