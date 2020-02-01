import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun.js';

ReactDOM.render(
    <div>
        <App />
        <div className = "state-drills"> 
            <HelloWorld />
            <Bomb />
            <RouletteGun bulletInChamber={8}/>
        </div> 
    </div>, document.getElementById('root'));





