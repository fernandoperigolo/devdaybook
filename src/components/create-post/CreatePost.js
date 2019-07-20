import React, { Component } from 'react'
import { handleCreatePost } from '../../actions/post'
import { connect } from 'react-redux'

class CreatePost extends Component {
  state = {
    createPostTitle: '',
    createPostContent: '',
  }

  handleCreatePostFormSubmit = (e) => {
    e.preventDefault()

    this.props.handleCreatePost(this.state)
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

    return (
      <div className="CreatePost">
        <h2>Create Post</h2>
        {post.createPostSuccess && 
          <p>Success: {post.createPostSuccess}</p>
        }
        {post.createPostError && 
          <p>Error: {post.createPostError}</p>
        }
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
