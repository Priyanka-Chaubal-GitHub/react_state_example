import React, { Component } from 'react';
import bell1 from "./bell1.png"
import bell2 from "./bell2.png"

class NewComp extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
         message: "Subscribe to my channel",
         sub: "Subscribe",
         imageURL: bell1
      };
    }

      styles = {
        fontStyle: "italic",
        color: "purple"
      };
 buttonchange=()=>{
    this.setState({
        message : "Hit the bell icon to never miss an update",
        sub : "Subscribed"
    }
    )
 }
 imagechange=()=>{
    this.setState({
        imageURL: bell2, 
        message : "Thank you, Have a good day!"
    })
 }
 stylesnew = {
    fontStyle: "italic",
    color: "red"
  };
  render() {
    return <div className="App"><h3 style={this.styles}>{this.state.message}</h3>
    <button onClick={this.buttonchange} style={this.stylesnew}>{this.state.sub}</button>
    <p /> 
    <img style={{width: "60px" , height: "60px"}} src={this.state.imageURL} 
    onClick={this.imagechange}
    alt="" />
    </div>;
  }
}

// we give event handler onclick to button and onclick state is updated, we use set state for that

export default NewComp;