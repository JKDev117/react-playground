/* 14.9 Assignment - State Drills */
/* Bomb */

import React from 'react';

class Bomb extends React.Component {
    state = {
        count: 0
    }

    componentDidMount(){
        this.interval = setInterval(() => {
                this.setState({count: this.state.count + 1})
            }, 
            1000)    
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }


    render(){

        if(this.state.count>=8){
            console.log('BOOM!!!!')
            this.componentWillUnmount();
            return <div>
                <p>BOOM!!!!</p>
            </div>
        } else if(this.state.count % 2 === 0){
            console.log('tick')
            return <div>
                <p>Tick</p>
            </div>
        } else {
            console.log('tock')
            return <div>
                <p>Tock</p>
            </div>
        }
        
    }

};



export default Bomb;


/* Thinkful Solution */

/*
import React, { Component } from 'react'

export default class Bomb extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  renderDisplay() {
    const { count } = this.state
    if (count >= 8) {
      clearInterval(this.interval)
      return 'BOOM!!!!'
    } else if (count % 2 === 0) {
      return 'tick'
    } else {
      return 'tock'
    }
  }

  render() {
    return (
      <div className='CountdownBomb'>
        {this.renderDisplay()}
      </div>
    )
  }
}

*/