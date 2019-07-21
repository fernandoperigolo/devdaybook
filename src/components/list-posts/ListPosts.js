import React, { Component } from 'react'
import { handleGetUserPosts } from '../../actions/post'
import { connect } from 'react-redux'
import { stringify } from 'querystring';

class ListPosts extends Component {
  state = {}

  componentDidMount(){
    this.props.handleGetUserPosts(this.props.match.params.uid)
  }

  render() {
    const { posts } = this.props
    console.log('posts', posts)
    return (
      <div className="ListPosts">
        <h2>Bob Posts</h2>
        {posts &&
          Object.keys(posts).map(post =>
            <div className="post-list-item" key={post}>
              {JSON.stringify(post)}
              <h3>{posts[post].title}</h3>
              <div className="content">
                {posts[post].content}
              </div>
              {posts[post].created && <p className="date">Created: {posts[post].created.seconds} <span>{dateConverter(posts[post].created.seconds)} - {timeConverter(posts[post].created.seconds)}</span></p>}
            </div>
          )
        }
      </div>
    )
  }
}

function dateConverter(timestamp){
  const date = new Date(timestamp * 1000).toLocaleDateString("en-US")
  return date
}

function timeConverter(timestamp){
  const time = new Date(timestamp * 1000).toLocaleTimeString("en-US")
  return time
}

function mapStateToProps({ post }) {
  return {
      posts: post.posts
  }
}

const mapDispatchToProps = {
  handleGetUserPosts,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts)
