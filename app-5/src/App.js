import React, { Component } from 'react';
import './App.css';
import Image from './Components/Image'

class App extends Component {
  render() {
    return(
      <div className = 'App'>
        <Image url = {'https://i.pinimg.com/236x/1a/41/cc/1a41cc0a485183de2ac86f9c63a4df16--nerd-geek-bugs.jpg'} />
        
      </div>
    )
  }
}



export default App;
