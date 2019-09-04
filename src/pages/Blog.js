import React from 'react';
import Posts from '../blog/Posts';

const Blog = () => (
  <React.Fragment>
    <header className='blog-header'>
      <h2>Blog Posts</h2>
      <button class='btn btn-primary'>View all tags</button>
    </header>
    <Posts />
    <Posts />
  </React.Fragment>
);

export default Blog;
