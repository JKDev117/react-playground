import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';
import renderer from 'react-test-renderer';

describe('Messages component', ()=> {
    //smoke test
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Messages />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    //snapshot test
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Messages name="Messages" unread={4}/>)
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



