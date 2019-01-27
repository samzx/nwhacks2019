import React from 'react';

const Post = (props) => (
  <div className="activity-inner">
    <h1>New Post</h1>
    <input type="text" className="new-title" placeholder="Title"/>
    <textarea type="text" className="new-post" placeholder="Something interesting and useful."/>
    <button onClick={() => {props.history.push('/')}}className="submit">Submit</button>
  </div>
)

export default Post;
