
import React,{Component} from 'react';
export class Person extends React.Component{
    constructor(){
        super();
            this.state={
                fullName :string,
                bio :string ,
                imgSrc : string,
                profession : string,
                /*show : Boolean*/
        }
    }
}
toggle =()=>{
    this.setState({
    show:!this.state.show
    })
  }
  render(){
  return(
    <div>
       <button onClick={this.toggle}>show</button>
    </div>
  );
}
export default Person;

