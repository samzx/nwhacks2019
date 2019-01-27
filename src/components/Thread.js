import React from 'react';

const Thread = (props) => (
  <div>
    <div className="thread">
      <h3>
        {props.title}
      </h3>
      <div className="thread-details">
        <div className="thread-points">{props.score} ⬆️ </div>
        <div className="thread-comments">{props.comments} 💬 </div>
        <div className="thread-distance">{props.distance}km away </div>
        <div className="thread-time">{props.time} minutes ago</div>
      </div>
    </div>
  </div>
)

export default Thread;