//14.10 Event Handlers & Conditional Rendering
import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'; //14.10
import toJson from 'enzyme-to-json'; //14.10

//copy of tabsProp from App.js
//array of objects each with a name & content
const tabsProp = [
    { name: 'First tab',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
    { name: 'Second tab',
      content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { name: 'Third tab',
      content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
  ];

describe('Tabs Component', () => {
    //smoke test
    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Tabs />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    //snapshot test
    it('renders the first tab by default',() => {
        //using enzyme
        const wrapper = shallow(<Tabs tabs={tabsProp} />);
        expect(toJson(wrapper)).toMatchSnapshot();  
        //using react-test-renderer
        /* 
        const tree = renderer.create(<Tabs tabs={tabsProp} />).toJSON();
        expect(tree).toMatchSnapshot();
        */
    })
    //snapshot test
    it('renders empty given no tabs', () => {
      //using enzyme
      const wrapper = shallow(<Tabs />); 
      expect(toJson(wrapper)).toMatchSnapshot();
    })
    //snapshot test
    it('closes the first tab and opens any clicked tab', () => {
      //using enzyme
      const wrapper = shallow(<Tabs tabs={tabsProp} />);
      
      //console.log(wrapper.find('button').debug());
      //^^ the debug output for .find('button') shows all of the buttons

      //to select only one element from a list inside a wrapper, use the .at()
      //method with an index number (e.g. 1 gives us the 2nd button)
      wrapper.find('button').at(1).simulate('click');
      expect(toJson(wrapper)).toMatchSnapshot();
    })
})

/* Notes:

shallow() (method in enzyme)
shallow() creates a wrapper instance of our component that we can interact with; 

wrapper
the wrapper allows us to find nodes withint his component's tree; 
it also allows us to simulate events on nodes

enzyme-to-json (library)
To use the wrapper with Jest's snapshot functionality, we'll need to create a 
JSON version of the component. We can use a library called enzyme-to-json 
that will convert a wrapper to a JSON object.
*/

