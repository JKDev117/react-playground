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
        clearTimeout(this.state.timeoutID)
    }

    handleClickButton = () => {
        this.setState({spinningTheChamber: true});
        let timeoutID = setTimeout(() => {
                this.setState({chamber: Math.ceil(Math.random()*8), spinningTheChamber: false})
            }
            ,2000);
        this.setState({timeout: timeoutID});
    }

    render(){
        console.log(this.props.bulletInChamber)
        console.log(this.state.chamber)
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