import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

import Menu from './components/Menu';
import Map from './components/Map';
import List from './components/List';
import Post from './components/Post';
import Settings from './components/Settings';

const AppRouter = () => (
  <div>
    <Switch>
      <Route path="/" exact component={Map} />
      <Route path="/map/" component={Map} />
      <Route path="/list/" component={List} />
      <Route path="/post/" component={Post} />
      <Route path="/settings/" component={Settings} />
    </Switch>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
            <div className="activity">
              <div>
                <AppRouter/>
              </div>
            </div>
            <Menu/>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
