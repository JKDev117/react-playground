//14.14 React Router

import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import WorkoutsPage from './WorkoutsPage'
import NotFoundPage from './NotFoundPage'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav>
          <Nav />
        </nav>
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/workouts' component={WorkoutsPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}


/* Notes 

'/' means no path

//Route

<Route /> component props
  path = 'A string, the Route component will be looking at the current path for this.'

  component = {A component, the Route component will render this component 
  when the page's path matches the path prop.}


//Switch

The Switch component (p. 19) will render only one of its child Route components. 
It will only render the first Route component that has a match. 
So, if none of the other Routes match, it can render the child Route that always matches!

Note: make sure the <Route component={NotFoundPage} /> is at the bottom of the list 
or it will never let a component below it render.

Now try the paths that don't exist:

    http://localhost:3000/foobar
    http://localhost:3000/aboutoe
    http://localhost:3000/no-existy

We can see that only the NotFoundPage component is rendered as it's inside the only Route that matched.
*/

