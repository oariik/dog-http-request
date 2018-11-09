import React, { Component } from 'react';
import './App.css';
import DogList from './DogList';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      dogs : []

    }
  }

    componentDidMount() {
      fetch(" https://dog.ceo/api/breeds/image/random/50 ")
      .then((res) => res.json())
      .then( (data) => {
          this.setState ({ dogs: data.message})
      })
    }


  render() {
    return (
      <div className="App">
      
          <p>
           Welcome to Dog World!
          </p>
          <DogList dogs= {this.state.dogs} />
         
        
     
      </div>
    );
  }
}

export default App;
