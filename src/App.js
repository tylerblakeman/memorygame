import React from 'react';

//Importing other react components
import DisplayGrid from './components/Display/Display_Grid'
import Title from './components/Title/Title'
import Scoreboard from './components/Scoreboard/Scoreboard'

//importing bootstrap elements
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'



function App() {
  return (
    <Container>
      <Title/>
      <Scoreboard/>
      <Row xs='2'>
      <DisplayGrid/>
      </Row>
    </Container>
  );
}

export default App;
