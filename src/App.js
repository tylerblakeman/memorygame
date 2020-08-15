import React, { Component } from "react";

//Importing other react components
// import DisplayGrid from "./components/Display/Display_Components";
import Title from "./components/Title/Title";
import Scoreboard from "./components/Scoreboard/Scoreboard";

//importing bootstrap elements
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//importing json with items that will be displayed
import array from './components/display_items.json'
import DisplayComponents from "./components/Display/Display_Components";


class App extends Component {
  state = {
    array: array,
    highScore: 0,
    score: 0,
    Clicked: false
  }
  
  
  handleClick = id => {
    // this.scramble();
    console.log(id)
    console.log('clickety clack')
    this.scoreKeeper(id)
  }
  
  scoreKeeper = id =>{
    this.state.array.forEach(element => {
      console.log(this.state)
      if (id === element.id && element.Clicked === true){
        console.log('you are a loser')
      }
      else if (id === element.id && element.Clicked === false){
        element.Clicked = true;
        console.log('here')
        console.log(element)
      }
    });
  }
  
 shuffleArray = () => {
  //  let array1 = array;
  //  array1.sort(function (a, b) { return 0.5 - Math.random() })
  //   return this.setState({array1});
  }

	render() {
    return (
			<Container>
				<Title />
				<Scoreboard />
				<Row xs="2">

          {this.state.array.map((array, index) => (
            <Col lg="3" className='text-center'>
          <DisplayComponents
          key={this.index}
          handleClick={this.handleClick}
          id={array.id}
          image={array.image}
          Clicked={this.state.Clicked}
          />
          </Col>
          ))}
				</Row>
			</Container>
		);
	}
}

export default App;
