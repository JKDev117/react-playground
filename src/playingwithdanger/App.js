//14.17 Organizing Your React Code; Error Boundaries

import React, {Component} from 'react';
import Currency from './Currency';
import CurrencyError from './CurrencyError';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Here are some currency values.</h1>
                <CurrencyError>
                    Germany: <Currency value={21} locale="de-DE" currency="USD" />
                </CurrencyError> 
                <CurrencyError>   
                    USA: <Currency value={21} locale="en-US" currency="USD" />
                </CurrencyError>
                <h1>The currency values displayed are subject to change without notice.</h1>    
            </div>
        );
    }
}

export default App;
