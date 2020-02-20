//14.13 API Requests

import React, { Component } from 'react';
import './demonymApp.css'

import Demonym from './demonym';
import CountrySelector from './countrySelector';


class DemonymApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      countrieslist: [],
      selected: null
    }
  }
  
  componentDidMount() {
    fetch('https://country.register.gov.uk/recordsWRONG.json?page-size=5000')
      .then(response => {
        // check if response is ok
        if(!response.ok) {
          throw new Error('Something went wrong, please try again later.'); // throw an error
        }
        return response; // ok, so just continue
      })
      .then(response => response.json())
      .then(data => {
        const countries = Object.keys(data)
              .map(key => data[key].item[0]);
        this.setState({
          countries,
          error: null
        });
      })
      .catch(err => {
        this.setState(
          {error: err.message}
        )
      });
  }
  
  //accepts an object representing the selected country and set the state's selected property to this object
  setSelected(selected){
    this.setState(
      {selected}
    );
  }

  render() {
    //const demon: what to do with the Demonym if no country is selected & what to do if a country is selected
    const demon = this.state.selected
          ? <Demonym name={this.state.selected['citizen-names']} country={this.state.selected.name}/>
          : <div className="demonym_app__placeholder">Select a country above</div>;
    const error = this.state.error
          ? <div className="demonym_app_error">{this.state.error}</div>
          : "";
    return (
      <div className="demonym_app">
        <CountrySelector 
          countries={this.state.countries}
          changeHandler={selected => this.setSelected(selected)}
          />
        {demon}
      </div>
    );
  }
}

export default DemonymApp;