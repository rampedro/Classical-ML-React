import React, {useState} from 'react';
import './App.css';
import {Points} from './components/points'
import {AddPointForm} from './components/addPointForm';
import {PerformRegression} from './components/performRegression';
import {LinRegressChart} from './components/linRegressChart';
import { Container } from 'semantic-ui-react';


function App() {
    const [points, setPoints] = useState([{x: 1, y: 2}, {x: 2, y: 1}, {x: 3, y: 4}]);
    const [metadata, setMetadata] = useState({
        pts: [{x: 1, y: 1.33}, {x: 3, y: 3.33}],
        m: 1,
        b: 0.33,
        residual: 0
    });
    const [toggle, setToggle] = useState(0);

    return (
        <Container>
            <AddPointForm onNewPoint={
                point => setPoints(currentPoints => [...currentPoints, point])
            }/>
            <PerformRegression 
                points={points}
                updateMetadata={
                    newMetadata => {
                        setMetadata(newMetadata);
                        setToggle((toggle + 1) % 2);
                    }
                }
            />
            <Points points={points}/>
            <LinRegressChart
                points={points}
                metadata={metadata}
                toggle={toggle}
            />
        </Container>
    );
}

export default App;
