import React, { Component } from 'react'
import { handleGetUserPosts } from '../../actions/post'
import Loading from '../loading/Loading'
import { connect } from 'react-redux'

class ListPosts extends Component {
  state = {
    loading: true,
  }

  componentDidMount(){
    this.props.handleGetUserPosts(this.props.match.params.uid).then(postsData => {
      this.setState({ loading: false })
    })
  }

  render() {
    const { posts } = this.props
    const { loading } = this.state
    const havePosts = posts ? Object.keys(posts).length : null

    return (
      <div className="ListPosts">
        <h2>Posts</h2>
        {loading &&
          <Loading />
        }
        {havePosts &&
          Object.keys(posts).map(post =>
            <div className="post-list-item" key={post}>
              <h3>{posts[post].title}</h3>
              <div className="content">
                {posts[post].content}
              </div>
              {posts[post].created && <p className="date">Created: {posts[post].created.seconds} <span>{dateConverter(posts[post].created.seconds)} - {timeConverter(posts[post].created.seconds)}</span></p>}
            </div>
          )
        }
        {!havePosts && !loading &&
          <div className="content">
            <p>This user have no posts or this user do not exists.</p>
          </div>
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
