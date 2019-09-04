import React from 'react';
import { Link } from 'react-router-dom';

const Post = () => {
  return (
    <Link to='/blog' className='post'>
      <div className='post-date'>03 September 2019</div>
      <h2 className='post-title'>Ways to make money as a developer</h2>
      <p className='post-desc'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
        ipsam voluptates praesentium asperiores voluptate porro eveniet optio,
        itaque doloremque rem. Ut explicabo veniam praesentium. Aut a vero,
        eligendi beatae cumque repellat similique, sint, animi officiis nesciunt
        totam quisquam. Nobis ullam, inventore ipsum molestiae consequuntur
        laborum ipsa! Pariatur consectetur, nesciunt autem commodi ullam,
        reprehenderit cupiditate quae enim consequatur voluptatem, aspernatur
        a....
      </p>
    </Link>
  );
};

export default Post;
