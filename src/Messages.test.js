//14.8

import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';
//Snapshots in Jest uses another package named react-test-renderer to get a snapshot 
//of the rendered output of the component which can then be saved to a file for future use. 
import renderer from 'react-test-renderer';

//describe() is used to create a test suite
//test suites help group your test cases
//each test suite should focus on a single component or functional area
describe('Messages component', ()=> {
    //smoke test
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Messages />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    //snapshot test
    //1. render the component and create a human-readable JSON file
    //2. compare the rendered component to a saved version of the component
    it('renders the UI as expected', () => {
        const tree = renderer
            //create() takes the component to be rendered & performs a render on it
            .create(<Messages name="Messages" unread={4}/>)
            //create the JSON file
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    //snapshot test on the Messages component with the unread prop set to 0
    it('renders the UI as expected with no unreads', () => {
        const tree = renderer
            .create(<Messages name="Messages" unread={0}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

})



