/* 14.9 Assignment - State Drills */
/* RouletteGun */

import React from 'react';

class RouletteGun extends React.Component {
    

    static defaultProps = {
        bulletInChamber: 8
    } 

    constructor(props){
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false,
            timeout: null
        }
    }

    componentWillUnmount(){
        clearTimeout(this.state.timeoutID) //The clearTimeout() method clears a timer set with the setTimeout() method. The ID value returned by setTimeout() is used as the parameter for the clearTimeout() method.
    }

    handleClickButton = () => {
        this.setState({spinningTheChamber: true});
        // The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
        let timeoutID = setTimeout(() => { 
                this.setState({chamber: Math.ceil(Math.random()*8), spinningTheChamber: false})
            }
            ,2000);
        console.log('let timeoutID = ',timeoutID); //=> 7,8,9,10,...
        this.setState({timeout: timeoutID});
        console.log('state.timeout: ',this.state.timout) //=> undefined
    }


    render(){
        console.log('props.bulletInChamber = ', this.props.bulletInChamber) //=> props.bulletInChamber = 8
        console.log('state.chamber: ', this.state.chamber) //=> 'null' at first, but then can be a random number (e.g. '7') after 'handleClickButton' runs. 
        if(this.state.spinningTheChamber===true){
            return <div>
                <p>spinning the chamber and pulling the trigger! ....</p>
            </div>;
        } else if(this.state.chamber === this.props.bulletInChamber) {
            return <div>
                <p>BANG !!! You're dead!</p>
                <button onClick={this.handleClickButton}>Pull the trigger!</button>
            </div>;
        } else {
            return <div>
                <p>You're safe!</p>
                <button onClick={this.handleClickButton}>Pull the trigger!</button>
            </div>;            
        }        
    }
    
}


export default RouletteGun;


/* Thinkful Solution */

/*

import React, { Component } from 'react'

export default class RouletteGun extends Component {
  static defaultProps = {
    bulletInChamber: 8
  };

  state = {
    chamber: null,
    spinningTheChamber: false,
  };

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  handleClick = () => {
    this.setState({
      spinningTheChamber: true,
    })
    this.timeout = setTimeout(() => {
      const randomChamber = Math.ceil(Math.random() * 8)

      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false,
      })
    }, 2000)
  }

  renderDisplay() {
    const { chamber, spinningTheChamber } = this.state
    const { bulletInChamber } = this.props
    if (spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger! ...'
    } else if (chamber === bulletInChamber) {
      return 'BANG!!!!!'
    } else {
      return 'you\'re safe!'
    }
  }

  render() {
    return (
      <div className='RouletteGun'>
        <p>{this.renderDisplay()}</p>
        <button onClick={this.handleClick}>
          Pull the trigger!
        </button>
      </div>
    )
  }
}

*/