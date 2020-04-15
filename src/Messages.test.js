import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';
//import the react-test-renderer package
import renderer from 'react-test-renderer';

//test suite
describe('Messages component', ()=> {
    //smoke test
    it('renders without crashing', () => {
        //first render a DOM element to render the
        //component into
        const div = document.createElement('div');
        //this is the actual test
        ReactDOM.render(<Messages />, div);
        //clean up code
        ReactDOM.unmountComponentAtNode(div);
    });

    //snapshot test
    it('renders the UI as expected', () => {
        const tree = renderer
            //render the component & create a human-readable JSON file
            .create(<Messages name="Messages" unread={4}/>)
            .toJSON();
        //compare the rendered component to a saved version of the component    
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



