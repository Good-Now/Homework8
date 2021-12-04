import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter,
} from 'react-router-dom';
import BrandNew from "./BrandNew";
import Carly from "./Carly";
import AG from "./AG";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>My Favorite Artists</h1>
          <ul className="header">
            <li><NavLink exact to="/">Brand New</NavLink></li>
            <li><NavLink to="/Carly">Carly Rae Jepsen</NavLink></li>
            <li><NavLink to="/AG">A.G. Cook</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={BrandNew}/>
            <Route path="/Carly" component={Carly}/>
            <Route path="/AG" component={AG}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
