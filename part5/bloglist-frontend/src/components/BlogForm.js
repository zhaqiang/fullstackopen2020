import React, { useState } from 'react'

const BlogForm = ({ createBlog }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const addBlog = event => {
    event.preventDefault()
    createBlog({
      title, author, url
    })

    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
    <div className="formDiv">
      <h2>Create a new blog</h2>

      <form onSubmit={addBlog}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            name="title"
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            name="author"
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          <label>URL:</label>
          <input
            type="text"
            id="url"
            value={url}
            name="url"
            onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <button type="submit" id="add-blog-btn">add</button>
      </form>
    </div>
  )
}

export default BlogForm
