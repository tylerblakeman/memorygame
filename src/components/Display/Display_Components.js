import React from 'react'
import Col from 'react-bootstrap/Col'

function DisplayComponents(props) {
  return (
    <Col lg="3">
      <img height={100} id={props.id} src={props.image} alt={props.name} />
    </Col>
  );
};

export default DisplayComponents;