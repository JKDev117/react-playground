//14.9 Setting, Reading, and Updating State

import React from 'react';


class Counter extends React.Component { //when we're using 'extends React.Component' syntax, we're building a new blueprint based off of the React.Component class
    static defaultProps = {
        step: 1
    }

    constructor(props){ //a constructor method is called when an instance of a class is created. In React class components, the props are supplied to the constructor as an argument.
        console.log('props in constructor', props)
        super(props) //super is used inside classes to reach into the original blueprint
        this.state = { 
            count: 0
        }
    }



    //when adding an event listener function to a React class, use an arrow function
    //to make sure that 'this' is referring to the class instance.
    handleButtonClick = () => {
        console.log('props in handleButtonClick', this.props)
        console.log('state in handleButtonClick', this.state)
        const newCount = this.state.count + this.props.step;
        this.setState({
            count: newCount
        })
    }

    render(){
        return (
            <div>
                 <p>The current count is: {this.state.count}</p>
                 <button onClick={this.handleButtonClick}>Add 1</button>
            </div>            
        )
    }
}

export default Counter;




/* ----------------------------------------------------------------------------- */

/*
import React from 'react';


class Counter extends React.Component {
    state = {
        count: 0
    };

    handleButtonClick() {
        console.log(this.state.count); //=> creates a "TypeError: Cannot read property 'state' of undefined". This is telling us we're trying to read a property called 'state'
                                       //   on a variable that's currently set to undefined. The variable whose state we're trying to read is 'this'. Therefore, right now,
                                       //   'this' is currently set to 'undefined'. 
                                       //   We won't go into detail about why this is broke, it's a known issue with JavaScript & JSX.

                                       //There are 3 ways to fix this: 
                                       //   1) constructor bind (see 14.9, p. 18)
                                       //   2) arrow function in JSX (see 14.9, p. 18)
                                       //   3) arrow function class method (see 14.9, p. 19)
    }

    render(){
        return (
            <div>
                 <p>The current count is: {this.state.count}</p>
                <button onClick={this.handleButtonClick}>Add 1</button>
            </div>            
        )
    }
}

export default Counter;
*/

/* ----------------------------------------------------------------------------- */


/* 
//Fix method 1: Constructor Bind
//bind the handleButtonClick method in the class constructor

import React from 'react';


class Counter extends React.Component {
    constructor(props){  // <-----------
        super(props)
        this.state = {
            count: 0
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);   // <-----------
    }

    handleButtonClick() {
        console.log(this.state.count);
    }

    render(){
        return (
            <div>
                 <p>The current count is: {this.state.count}</p>
                <button onClick={this.handleButtonClick}>Add 1</button>
            </div>            
        )
    }
}

export default Counter;


*/

/* ----------------------------------------------------------------------------- */
/* 
//Fix method 2: arrow function in JSX
// Use an arrow function in the JSX
// Use 'onClick = { () => this.handleButtonClick()}'

import React from 'react';


class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            count: 0
        }
    }

    handleButtonClick() {
        console.log(this.state.count);
    }

    render(){
        return (
            <div>
                 <p>The current count is: {this.state.count}</p>
        <button onClick={ () => this.handleButtonClick() }>Add 1</button>  <---------------
        </div>            
        )
    }
}

export default Counter;

*/

/* ----------------------------------------------------------------------------- */

/*
//Fix method 3: arrow function class method
//change the event handler, 'handleButtonClick' to an arrow function instead

import React from 'react';


class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            count: 0
        }
    }

    handleButtonClick = () => {          //<------------------------
        console.log(this.state.count);
    }

    render(){
        return (
            <div>
                 <p>The current count is: {this.state.count}</p>
                 <button onClick={this.handleButtonClick}>Add 1</button>
            </div>            
        )
    }
}

export default Counter;

*/