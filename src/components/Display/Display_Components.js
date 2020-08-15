import React from 'react'
import Col from 'react-bootstrap/Col'
// import Display_Grid from './Display_Grid'

function DisplayComponents(props) {
  return (
    <img key={props.index} height={200} onClick={() => props.handleClick( props.id)} id={props.id} src={props.image} alt={props.name} />
  );
};

export default DisplayComponents;