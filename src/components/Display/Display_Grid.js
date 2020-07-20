import React, { Component } from 'react';
import DisplayComponents from './Display_Components'
import displayitems from '../display_items.json'


class DisplayGrid extends Component {
  render() {
    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }
    shuffle(displayitems);
    const showItems = displayitems.map((element) => {
      console.log(element)
      return(
      <DisplayComponents
      id={element.id}
      image={element.image}
      name={element.name}
      />
      )
    })
    return (
      <>
        {showItems}
      </>
    );
  }
}

export default DisplayGrid;