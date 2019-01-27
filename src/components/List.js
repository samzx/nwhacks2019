import React from 'react';
import Modal from 'react-modal';

import Thread from './Thread';

const customStyles = {
  content: {
    bottom: 105,
    left: 0,
    right: 0,
    border: 0,
    boxShadow: "0 0 10px 0 #aaa",
  }
}

class List extends React.Component {

  state = {
    modalIsOpen: false,
    title: "Placeholder title."
  }

  handleOnClick = () => {
    this.setState(() => ({ modalIsOpen: true }))
    console.log("click")
  }

  closeModal = () => {
    this.setState(() => ({ modalIsOpen: false }))
    console.log("close")
  }

  render() {
    return (
      <div className="activity-inner">
        <h1>Conversations nearby</h1>
        <div onClick={this.handleOnClick}>
          <Thread title="UBC has a nude beach! 😱" comments={3} score={81} distance={2} time={40}/>
        </div>
        <div onClick={this.handleOnClick}>
          <Thread onClick={this.handleOnClick} title="Check out the hackathon today near Life Sciences" comments={4} score={22} distance={1} time={30}/>
        </div>
        <div onClick={this.handleOnClick}>
          <Thread onClick={this.handleOnClick} title="Whistler 22cm snow yesterday! ☃️" comments={8} score={55} distance={22} time={120}/>
        </div>
        <div onClick={this.handleOnClick}>
          <Thread onClick={this.handleOnClick} title="Cheap tickets for Vancouver canucks game." comments={1} score={11} distance={2} time={55}/>
        </div>
        <div onClick={this.handleOnClick}>
          <Thread onClick={this.handleOnClick} title="Sunset at Canada Place is beautiful. Be sure to check it out. 🌅" comments={1} score={3} distance={3} time={20}/>
        </div>
        <div/>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          // appElement={"modal-element"}
        >
          <div style={{ position: "fixed", top: 40, left: 0 , margin: 10}} onClick={this.closeModal}>🔙</div>
          <h2>{this.state.title}</h2>
          <p>Some text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <hr/>
          <h3>Comments</h3>
        </Modal>
      </div>
    )
  }
}

export default List;
