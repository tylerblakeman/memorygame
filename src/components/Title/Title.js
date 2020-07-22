import React from 'react';

//bootstrap jumbotron import
import Jumbotron from 'react-bootstrap/Jumbotron'

const Title = () => {
  return (
    <>
    <Jumbotron className="text-center">
      <h1>Memory Game</h1>
      <h2>Remember the character that you clicked? Don't click on them again or you LOSE.</h2>
    </Jumbotron>
    </>
  );
};

export default Title;