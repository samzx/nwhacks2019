import React from 'react';
import Thread from './Thread';

const List = (props) => (
  <div className="activity-inner">
    <h1>Conversations nearby</h1>
    <Thread title="UBC has a nude beach! 😱" comments={3} score={81} distance={2} time={40}/>
    <Thread title="Check out the hackathon today near Life Sciences" comments={4} score={22} distance={1} time={30}/>
    <Thread title="Whistler 22cm snow yesterday! ☃️" comments={8} score={55} distance={22} time={120}/>
    <Thread title="Cheap tickets for Vancouver canucks game." comments={1} score={11} distance={2} time={55}/>
    <Thread title="Sunset at Canada Place is beautiful. Be sure to check it out. 🌅" comments={1} score={3} distance={3} time={20}/>
  </div>
)

export default List;
