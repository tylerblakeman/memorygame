import React from 'react'
import Col from 'react-bootstrap/Col'
import Display_Grid from './Display_Grid'

function DisplayComponents(props) {
  return (
    <Col lg="3" className='text-center'>
        <img key={props.index} height={200} onClick={()=>{}} id={props.id} src={props.image} alt={props.name} />
    </Col>
  );
};

export default DisplayComponents;

// import React, { Component } from 'react';

// class DisplayComponents extends Component {
//   constructor(props)
//     super(props);

//   render() {
//     return (
//       <Col lg="3">
//       <button id={props.id}
//       handleClick={()=> alert('hello', this.id)}
//       >
//         <img height={200} id={props.id} src={props.image} alt={props.name} />
//       </button>
//     </Col>
//     );
//   }
// }

// export default DisplayComponents;