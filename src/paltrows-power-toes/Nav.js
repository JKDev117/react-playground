//14.14

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Content from './Content'
import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <Content className='Nav'>
        <Link to='/'>
          Home
        </Link>
        <Link to='/about'>
          About
        </Link>
        <Link to='/workouts'>
          Workouts
        </Link>
      </Content>
    )
  }
}

/* Notes

(e.g.)

<a href='/'>
  Home
</a>

^^ causes a complete page load (pgs. 14-15)

The Link component will use a browser feature and some 
JavaScript to "pretend" to do a complete page load.
React is only updating which components are rendered, 
even though the web address at the top of the browser is updating the path.


*/ 


