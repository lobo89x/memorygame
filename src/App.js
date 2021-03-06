import React, { Component } from 'react';
// import logo from './logo.svg';
import Card from './components/card'
import './App.css';




const cards = [
  {
    id: 1,
    name: "1",
  },
  {
    id: 2,
    name: "2",
  },
  {
    id: 3,
    name: "3",
  },
  {
    id: 4,
    name: "4",
  },
  {
    id: 5,
    name: "5",
  },
  {
    id: 6,
    name: "6",
  },
  {
    id: 7,
    name: "7",
  },
  {
    id: 8,
    name: "8",
  },
  {
    id: 9,
    name: "9",
  }
];



class App extends Component {
  state = {
    score: 0
  };

  updatescore = (gl) => {
    this.setState( { score: gl.length }, () => {
      console.log(this.state.score);
  });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Memory Game</h2>
        </div>
        <p className="App-intro">
          this is  simple react game to test my skills. Click the numbers but do not or you'll have to start over!
        </p>
        <h6>Your Score is::  {this.state.score}</h6>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 text-center"></div>
            <div className="col-lg-6 text-center">
                <div className="card-deck">
                  <Card scoreupdate={this.updatescore} cards={cards}/>
                </div>
            </div>
            <div className="col-lg-3 text-center"></div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
