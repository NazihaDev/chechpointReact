
import React,{ Component } from 'react';
import Person from './Person';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      fullName : "Naziha",
      bio : "developeur en React",
     imgSrc : myImage,
      profession : "Devellopement"
    }
  };
 
  render() {
    return (
      <div className="App">
        
        <h1>Hello{this.state.fullName}</h1>
        <h1>{this.state.bio}</h1>
       <img src={this.state.imgSrc} alt="im"></img>
        <h1>{this.state.profession}</h1>
        <br></br>
        <button onClick={this.handleShowPerson}>click here</button>
  
      
    </div>
  );
}
}
export default App;
