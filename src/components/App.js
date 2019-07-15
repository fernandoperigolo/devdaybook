import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'
import CreateAccount from './create-account/CreateAccount'
import Login from './login/Login'
import DayBook from './day-book/DayBook'
import Home from './home/Home'
import PageNotFound from './page-not-found/PageNotFound'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/404' component={PageNotFound} />
          <Route path='/create-account' exact component={CreateAccount} />
          <Route path='/login' exact component={Login} />
          <Route path='/:user' exact component={DayBook} />
          <Route path='/' exact component={Home} />
          <Route path='*' component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
