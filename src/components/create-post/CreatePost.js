import React, { Component } from 'react'
import { handleCreatePost } from '../../actions/post'
import { connect } from 'react-redux'
import Loading from '../loading/Loading'

class CreatePost extends Component {
  state = {
    createPostTitle: '',
    createPostContent: '',
    loading: false,
  }

  handleCreatePostFormSubmit = (e) => {
    e.preventDefault()
    this.setState({ loading: true })
    this.props.handleCreatePost(this.state).then(() => {
      this.setState({ loading: false })
    })
  }

  handleChange = (e) => {
    const stateItem = e.target.id
    const value = e.target.value

    this.setState(() => ({
      [stateItem]: value
    }))
  }

  render() {
    const { post } = this.props
    const { loading } = this.state
    const showForm = !post.createPostSuccess

    return (
      <div className="CreatePost">
        <h2>Create Post</h2>
        {post.createPostSuccess && 
          <p className="message success">Success: {post.createPostSuccess}</p>
        }
        {post.createPostError && 
          <p className="message error">Error: {post.createPostError}</p>
        }
        {showForm && 
          <form onSubmit={this.handleCreatePostFormSubmit}>
            <p>
              <label htmlFor="createPostTitle">Title</label>
              <input type="text" name="createPostTitle" id="createPostTitle" onChange={this.handleChange} value={this.state.createPostTitle} />
            </p>
            <p>
              <label htmlFor="createPostContent">Content</label>
              <textarea name="createPostContent" id="createPostContent" onChange={this.handleChange} value={this.state.createPostContent} />
            </p>
            <p>
              <input type="submit" value="Create Post" className="button" />
            </p>
          </form>
        }
        {loading && 
          <Loading />
        }
      </div>
    )
  }
}

function mapStateToProps({post}) {
  return {
      post,
  }
}

const mapDispatchToProps = {
  handleCreatePost,
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)
