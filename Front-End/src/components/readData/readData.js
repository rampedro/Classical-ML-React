import React, {Component,useEffect} from 'react';
import { Header } from 'semantic-ui-react';


export class ReadData extends Component {
    constructor() {
        super();
    };

    componentDidMount() {
        this.fetchApiToEntries('http://127.0.0.1:5000/readdata');
      }
      fetchApiToEntries = (apiToFetch) => {
          fetch(apiToFetch)
              .then(result => {
              result.json().then(data => {
                console.log(data);

              })
              .catch((error) => console.log(error.message));
            })};
    render() {
        return (
            <div>
                <Header className='title'
                        size='huge'>
                    This is my test page to read data from python program
                </Header>
                <div className="tester">
                   
                </div>        
            </div>
        );
    }
};

