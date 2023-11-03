import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import DATAJUSTICE from './views/data-justice'
import HOME from './views/home'
import PROJECTS from './views/projects'
import ABOUT from './views/about'
import CONTACT from './views/contact'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={DATAJUSTICE} exact path="/data-justice" />
        <Route component={HOME} exact path="/" />
        <Route component={PROJECTS} exact path="/projects" />
        <Route component={ABOUT} exact path="/about" />
        <Route component={CONTACT} exact path="/contact" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
