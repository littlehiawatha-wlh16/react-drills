import React, { Component } from 'react';
import './App.css';
import Image from './Components/Image'

class App extends Component {
  render() {
    return(
      <div className = 'App'>
        <Image url = {'https://http.cat/409'} />
        {/* <Image url = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdev.to%2Fteamxenox%2Ftop-10-programming-memes-pemes-4php&psig=AOvVaw1z0rmUgfT19r0opZB3KeI3&ust=1580772935103000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCj65uEtOcCFQAAAAAdAAAAABAI'/> */} 
        {/* how do I make the above url work? */}
      </div>
    )
  }
}



export default App;
