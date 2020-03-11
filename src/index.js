import React from 'react';
import ReactDOM from 'react-dom';
import App from './playingwithdanger/App';
//import App from './App'; //commented out for 14.14
//import App from './paltrows-power-toes/App'; //commented out for 14.17



import './index.css';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun.js';
import { BrowserRouter } from 'react-router-dom';
import AppLang from './lang-context/AppLang';
import RegistrationForm from './registrationForm/registrationForm';

ReactDOM.render (
        <>
            {/* 14.17 */}
            <App />

            {/* 14.17 
            <RegistrationForm />    
            */}

            {/* 14.15 */}
            {/* <AppLang /> */}

            {/* //14.14
            <BrowserRouter>
                <App />
            </BrowserRouter>
            */}
            
            {/* //commented out for 14.14
            <div className = "state-drills"> 
                <HelloWorld />
                <Bomb />
                <RouletteGun bulletInChamber={8}/>
            </div>
            */}

        </> 
    , document.getElementById('root')

);
    
    
    
    





