import React from "react";
import ReactDOM from "react-dom";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

import Menu from './components/Menu';
import Map from './components/Map';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="activity">
          <Map/>
        </div>
        <Menu/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
