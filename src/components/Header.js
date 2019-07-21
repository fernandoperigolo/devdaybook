import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { handleLogout } from '../actions/user'
import { connect } from 'react-redux'
import './Header.scss'


class Header extends Component {
  handleClickLogout = (e) => {
    e.preventDefault()

    this.props.handleLogout()
  }

  render(){
    const { user } = this.props
    return (
      <div className="Header">
        <h1>/Dev Day-Book</h1>
        <nav>
          <ul>
            <li><NavLink exact to='/'>/home</NavLink></li>
            {!user.userData &&
              <Fragment>
                <li><NavLink to='/login'>/login</NavLink></li>
                <li><NavLink to='/create-account'>/create-account</NavLink></li>
              </Fragment>
            }
            {user.userData &&
              <Fragment>
                <li><NavLink to={`/${user.userData.uid}`}>/my-posts</NavLink></li>
                <li><NavLink to='/create-post'>/create-post</NavLink></li>
                <li><button className="button" onClick={this.handleClickLogout}>/logout</button></li>
              </Fragment>
            }
          </ul>
        </nav>
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
  handleLogout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
