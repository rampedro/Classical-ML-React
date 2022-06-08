import React, {Component} from 'react';
import {BackgroundText} from './BackgroundText';
import { Header } from 'semantic-ui-react';
import ChartWrapper from './ChartWrapper';
import AnyWrapper from './AnyWrapper';


export class Patterns extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            
        };
    };

    


    // Defining a fnction getData to later be useed as getData(url)

    getData = (apiToFetch) => {
        fetch(apiToFetch)
            .then(result => {
                result.json().then(data => {
                    //console.log(data);
                    // Settign the state ( making the changes to be render soon after)
                    this.setState({ name: data.name })

                })
                    .catch((error) => console.log(error.message));
            })
    };


        // Mounting component lets calls the (url)

        componentDidMount() {
            this.getData('http://127.0.0.1:5000/patterns');
        }
    

// in the rendering,
// get name of the shape of patten from the API above, and 
// pass it to Anywrapper, to make it for you.

// The raeason div does not show this.state.name is because the intiriaul state of name

    

    render() {
        return (
       <g>
            <div> Click on the button above to appear a name here -- {this.state.name} </div>
            <ChartWrapper />

            
            <AnyWrapper />
           
            </g>
         
            
        );
    }
};

//            <button onClick={this.makeChange} value={this.state.name} > click Here</button> 



