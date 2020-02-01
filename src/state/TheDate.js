// 14.9 Setting, Reading, and Updating State

import React from 'react';

//class component
class TheDate extends React.Component { //when we're using 'extends React.Component' syntax, we're building a new blueprint based off of the React.Component class
    constructor(props){ //a constructor method is called when an instance of a class is created. In React class components, the props are supplied to the constructor as an argument.
        super(props); //super is used inside classes to reach into the original blueprint
        this.state = {datetime: new Date()}; //we initialize state in a class component by assigning values ot 'this.state' inside the constructor; state is often set as an object; unlike props, we can change state
        console.log('constructor');
    }
    componentDidMount() { // is invoked immediately after a component is "mounted" (inserted into the tree)
        console.log('componentDidMount');
        //"this.interval" is used here to save the interval when we create it so that we can unmount it later   
        this.interval = setInterval(() => {
            console.log('setInterval');
            this.setState({
                datetime: new Date()
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() { /* we can access state within the render function */
        console.log('render');
        return (
            <div> {this.state.datetime.toLocaleString()}</div>
        )    
    }
}

export default TheDate;



/* Notes
JS:
* setInterval() - JS method which executes a specified function multiple times at set time intervals specified in milliseconds (1000ms = 1second).
* clearInterval() - JS method which clears the interval which has been set by setInterval() function before that.

React:
* componentDidMount() - is invoked immediately after a component is "mounted" (inserted into the tree)


* componentWillUnmount() - is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, 
such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount(); cleans up the interval when the component is removed from the DOM; 
(e.g.) we don't want any setInterval's hanging around when they shouldn't be.

* setState() - takes an object argument that the component will then merge with the existing state. Every time setState is called, the React component will re-trigger render.



*/







/* -------------- Previous Codes -------------- */

/*
import React from 'react';

//class component
class TheDate extends React.Component { //when we're using 'extends React.Component' syntax, we're building a new blueprint based off of the React.Component class
    constructor(props){ //a constructor method is called when an instance of a class is created. In React class components, the props are supplied to the constructor as an argument.
        super(props); //super is used inside classes to reach into the original blueprint
        this.state = { //we initialize state in a class component by assigning values ot 'this.state' inside the constructor; state is often set as an object; unlike props, we can change state
            foo: 'foo',
            hello: 'Hello, world!',
            list: [1, 2, 3],
            obj: { nested: 'object', yes: true }
        }
    }

    render() { // we can access state within the render function
        console.log(this.state);
        return (<div>{this.state.hello}</div>);
    }
}

export default TheDate;

*/

   