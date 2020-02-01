/* 14.9 Assignment - State Drills */
/* HelloWorld */

import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: "world"
    }

    handleButtonClick(targetVal) {
        this.setState({
            who: targetVal
        })
    }

    render(){
        return <div>
            <p>Hello, {this.state.who}!</p>
            <button value="world" onClick={e => this.handleButtonClick(e.target.value)}>World</button>
            <button value="friend" onClick={e => this.handleButtonClick(e.target.value)}>Friend</button>
            <button value="React" onClick={e => this.handleButtonClick(e.target.value)}>React</button>
        </div>;
    }


}


export default HelloWorld;


/* Thinkful's Solution */

/*
import React, { Component } from 'react'

export default class HelloWorld extends Component {
  state = {
    who: 'world',
  };

  render() {
    return (
      <div className='HelloWorld'>
        <p>Hello, {this.state.who}!</p>
        <button
          onClick={() => this.setState({ who: 'world' })}
        >
          World
        </button>
        <br/>
        <button
          onClick={() => this.setState({ who: 'friend' })}
        >
          Friend
        </button>
        <br />
        <button
          onClick={() => this.setState({ who: 'React' })}
        >
          React
        </button>
      </div>
    )
  }
}


*/