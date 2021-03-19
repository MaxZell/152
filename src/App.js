
import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import { createImpressum } from "./Impressum";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/impressum">Impressum</Link></li>
          </ul>

          <hr />
  
          <Route exact path="/" component={Home} />
          <Route path="/impressum" component={Impressum} />
        </div>
      </HashRouter>
    );
  }
}

const Home = () => <h2>Home</h2>
const Impressum = () => createImpressum();

export default App;