//14.10 Event Handlers & Conditional Rendering

import React from 'react';

class Tabs extends React.Component {
    static defaultProps = {tabs: []};

    state = {
        currentTabIndex: 0
    };


    handleButtonClick(index) {
        this.setState({currentTabIndex: index});
    }

    renderButtons() {
        return this.props.tabs.map((tab,index) => (
                <button key={index} onClick={()=>this.handleButtonClick(index)}>
                    {tab.name}
                </button>    
            ));
    }
    
    renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex];
        return <div className='content'> {currentTab.content} </div>
    }
    
    render() {
        return (
            <div>
                {this.renderButtons()}
                {!!this.props.tabs.length && this.renderContent()} {/* !! converts 'Object' to 'boolean' */}
                {/* 
                {this.props.tabs.length && this.renderContent()}
                */}
            </div>
        )
    }
}

export default Tabs;






/* from App.js

//array of objects each with a name & content
const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];


function App() {
  return (
    <main className='App'>
        ...
        <Tabs tabs={tabsProp}/>
        ...
    </main>
  )
}


*/





/*

import React from 'react';


class Tabs extends React.Component {
    static defaultProps = {tabs: []};


    render() {
        const buttons = this.props.tabs.map((tab,index) => (
            <button key={index}>
                {tab.name}
            </button>    
        ));
        const currentTab = this.props.tabs[0];

        return (
            <div>
                {buttons}
                {/* Only show content when the tabs array has length *//*}
                {this.props.tabs.length && (
                    <div className='content'>
                        {currentTab.content}
                    </div>
                )}    
            </div>
        )
    }



}


export default Tabs;


*/