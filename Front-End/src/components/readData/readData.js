import React, {Component,useEffect} from 'react';
import { Header } from 'semantic-ui-react';


export class ReadData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateData : 'Empty'
        }
    };



    getData = (apiToFetch) => {
        fetch(apiToFetch)
            .then(result => {
            result.json().then(data => {
              //console.log(data);
              // Settign the state ( making the changes to be render soon after)
              this.setState({stateData : data})

            })
            .catch((error) => console.log(error.message));
          })};



    componentDidMount() {
        this.getData('http://127.0.0.1:5000/readdata');
      }



    render() {
        return (
            <div>
                <Header className='title'
                        size='huge'>

                 Loading data from Python backend !
                </Header>
                <div className="tester">
                <div>  
                    {this.state.stateData}
                </div>
                
                   
                </div>        
            </div>
        );
    }
};

