//14.15 Creating & Reading Context

import React, {Component} from 'react';
import Child from './Child';
import LangControls from './LangControls';
import LanguageContext from './LanguageContext';

export default class AppLang extends Component {
    state = {
        lang: window.navigator.language
    };

    handleSetLang = (lang) => {
        this.setState({lang})
    };
    
    render(){
        const contextValue = {
            lang: this.state.lang,
            setLang: this.handleSetLang,
        }

        console.log("AppLang state:", this.state)

        return(
            <LanguageContext.Provider value={contextValue}>
                <div className="App Lang">
                    <LangControls 
                        onSetLang={this.handleSetLang} />
                    <Child />
                </div>
            </LanguageContext.Provider>    
        )
    }
}




