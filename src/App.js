import React from 'react';
import "./App.css"; 
import NewComp from "./Components/NewComp";


// Create class component
class App extends React.Component {
  // adding style to beutify code

  styles = {
    fontStyle: "bold",
    color: "teal"
  };
  render(){
    return ( 
    <div className="App">
      <h1 style={this.styles}> Welcome </h1>
      <NewComp />
    </div>
    );
  }
}

// by following JSX convention and enclose all HTML tags within a div

// cmd me cd start and then npm start to open app in browser

export default App;
