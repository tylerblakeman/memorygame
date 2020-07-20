import React from 'react';
import './App.css';
import DisplayGrid from './components/Display/Display_Grid'
import displayitems from './components/display_items.json'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function App() {
  return (
    <Container>
      <Row xs='2'>
      <DisplayGrid />
      </Row>
    </Container>
  );
}

export default App;
