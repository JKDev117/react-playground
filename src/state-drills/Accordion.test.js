import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';


const sectionsProp = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
]



describe('Accordion Compoment', () => {

    it('renders an empty ul when the sections prop is not supplied', () => {
        const wrapper = shallow(<Accordion />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    
    it('renders no sections as active by default', () => {
        const wrapper = shallow(<Accordion sections={sectionsProp}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    
    })

    it('the component opens a click section', () => {
        const wrapper = shallow(<Accordion sections={sectionsProp}/>);
        wrapper.find('button').at(0).simulate('click');
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('only one section opens at a time', () => {
        const wrapper = shallow(<Accordion sections={sectionsProp}/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        expect(toJson(wrapper)).toMatchSnapshot();
    })

})


