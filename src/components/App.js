import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'
import CreateAccount from './create-account/CreateAccount'
import CreatePost from './create-post/CreatePost'
import ListPosts from './list-posts/ListPosts'
import Login from './login/Login'
import Home from './home/Home'
import Header from './Header'
import Loading from './loading/Loading'
import PageNotFound from './page-not-found/PageNotFound'
import { onAuthStateChanged } from '../actions/user'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount() {
    this.props.onAuthStateChanged()
  }

  render(){
    const { user } = this.props

    if (user.userLoading === true || user.userLoading === null) {
      return <Loading />
    }

    return (
      <div className="App">
        <Router>
          <Fragment>
            <Header />
            <Switch>
              <Route path='/404' component={PageNotFound} />
              <Route path='/create-account' exact component={CreateAccount} />
              <Route path='/create-post' exact component={CreatePost} />
              <Route path='/login' exact component={Login} />
              <Route path='/:uid' exact component={ListPosts} />
              <Route path='/' exact component={Home} />
              <Route path='*' component={PageNotFound} />
            </Switch>
          </Fragment>
        </Router>
      </div>
    )
  }
}

function mapStateToProps({user}) {
  return {
      user,
  }
}

const mapDispatchToProps = {
  onAuthStateChanged,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
