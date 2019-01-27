import React from 'react';

class Thread extends React.Component {

  render(){
    return (
      <div>
        <div className="thread">
          <h3>
            {this.props.title}
          </h3>
          <div className="thread-details">
            <div className="thread-points">{this.props.score} ⬆️ </div>
            <div className="thread-comments">{this.props.comments} 💬 </div>
            <div className="thread-distance">{this.props.distance}km away </div>
            <div className="thread-time">{this.props.time} minutes ago</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Thread;