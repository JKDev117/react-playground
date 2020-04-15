//14.7 Default Props & Class Components

import React from 'react';
import './Tooltip.css';

//functional component
function Tooltip(props){
    return (
        <span className="Tooltip">
            <span className="Tooltip-content" style={{color: props.color}}>
                {props.children}
            </span>            
            <div className="Tooltip-message">
                {props.message}
            </div>    
        </span>    
    )
}

/* p. 7
One difference between render() and a function Component() is how props work. 
In a function component, props are a parameter, as we've seen. 
In a class, however, props aren't a parameter anymore, we need to access props using this.props.
*/


//class component
class TooltipClass extends React.Component {
    /*
    The defaultProp will be used if no equivalent prop is supplied.
    The rule for making default props is to create a defaultProps property for the class with 'static defaultProps' 
    and then assign an object to that property. The keys of that object are the props you want to have defaults 
    for and the values are the default values you want to assign.
    */
    static defaultProps = {
        color: '#01A800', //green
    };
    render() { //render is the only method required for React class components; the render method is similar to the function components
        console.log('Using a class component!')
        console.log(this.props)
        return (
            <span className='Tooltip'>
                <span className='Tooltip-content' style={{color: this.props.color}}>
                    {this.props.children}
                </span>
                <div className='Tooltip-message'>
                    {this.props.message}
                </div>
            </span>        
        )
    }
}


//export default Tooltip;

export default TooltipClass;


