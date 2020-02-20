import React from 'react';
import ReactDOM from 'react-dom';
import Demonym from './Demonym';

// this is the test case (smoke test)
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Demonym />, div);
  ReactDOM.unmountComponentAtNode(div);
});