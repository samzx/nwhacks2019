import React from "react";
import ReactDOM from "react-dom";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

import Menu from './components/Menu';
import Map from './components/Map';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Map/>
        <Menu/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
