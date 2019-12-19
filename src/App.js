import React, {useState} from 'react';
import './App.css';
import {Points} from './components/points'
import {AddPointForm} from './components/addPointForm';
import {PerformRegression} from './components/performRegression';
import { Container } from 'semantic-ui-react';

function App() {
  const [points, setPoints] = useState([[1, 2],[2, 1],[3, 4]]);

  return (
    <Container>
      <AddPointForm onNewPoint={
        point => setPoints(currentPoints => [...currentPoints, point])
      }/>
      <PerformRegression points={points}/>
      <Points points={points}/>
    </Container>
  );
}

export default App;
