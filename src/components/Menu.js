import React from 'react';

import { withRouter } from "react-router-dom";

class Menu extends React.Component {
  handleClickItem = (route) => {
    // console.log(this.props, route);
    this.props.history.push(`/${route}`);
  }
  render(){
    return(
      <div className="menu">
        <i onClick={() => this.handleClickItem("map")} className="fas fa-map-marked-alt"></i>
        <i onClick={() => this.handleClickItem("list")} className="fas fa-list-ul"></i>
        <i onClick={() => this.handleClickItem("post")} className="fas fa-pen"></i>
        <i onClick={() => this.handleClickItem("settings")} className="fas fa-cog"></i>
      </div>
    )
  }
}

export default withRouter(Menu);
