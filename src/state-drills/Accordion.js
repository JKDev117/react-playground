import React, { Component } from 'react';
import './Accordion.css'


export default class Accordion extends Component {
    static defaultProps = {sections: []};

    state = {
        clickedIndex: null,
    };

    //button click event handler
    handleButtonClick(index) {
        this.setState({clickedIndex: index});
    }

    //render sections
    renderSections() {
        return this.props.sections.map((section, index) => 
            <li key={index}>
                <button onClick={()=>this.handleButtonClick(index)}>
                    {section.title}
                </button>
                {this.renderContent(index)}
            </li>
        )
    }

    //render the content inside the buttons
    renderContent(index) {
        if(index === this.state.clickedIndex){
            return <p>{this.props.sections[index].content}</p>
        } else {
            return null;
        }  
    }

    //render the whole thing
    render() {
        return <ul>
            {this.renderSections()}
        </ul>
    }


}

/* Thinkful Solution

import React, { Component } from 'react'
import './Accordion.css'

export default class Accordion extends Component {
  static defaultProps = {
    sections: []
  };

  state = {
    activeSectionIndex: null,
  }

  handleSetActiveSecion = (sectionIndex) => {
    this.setState({ activeSectionIndex: sectionIndex })
  }

  renderItem(section, idx, activeSectionIndex) {
    return (
      <li className='Accordion__item' key={idx}>
        <button
          type='button'
          onClick={() => this.handleSetActiveSecion(idx)}
        >
          {section.title}
        </button>
        {(activeSectionIndex === idx) && <p>{section.content}</p>}
      </li>
    )
  }

  render() {
    const { activeSectionIndex } = this.state
    const { sections } = this.props
    return (
      <ul className='Accordion'>
        {sections.map((section, idx) =>
          this.renderItem(section, idx, activeSectionIndex)
        )}
      </ul>
    )
  }
}




*/