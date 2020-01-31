import React, {Component} from 'react';
import './App.css';
  class App extends Component{
    constructor(){
      super();

        this.state = {
          hobbies: [ 'hiking', 'camping', 'fishing', 'crabing', 'biking']
        };
  }
  

  render () {
    let hobbiesDisplayed = this.state.hobbies.map((element,index) => {
    return <h2 key = {index} > {element}</h2>;
    });

  return (
    <div className="App">
      <h1 >{hobbiesDisplayed}</h1>
      

    </div>
  );
}

}
export default App;


/// Where is state initialized? initial state or were we start
/// where is state changed?
/// where is state displayed?



// // // --------------------------------> Solution Code <--------------------------------- // // 
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      foods: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    };
  }

  render() {
    let foodsToDisplay = this.state.foods.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });

    return <div className="App">{foodsToDisplay}</div>;
  }
}

export default App;