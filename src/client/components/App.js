/* eslint-disable import/no-named-as-default */
import {NavLink, Route, Switch} from "react-router-dom";

import HomePage from "./HomePage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import NotFoundPage from "./NotFoundPage";
import EditorContainer from "./editorContainer";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div>
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/xml-editor" activeStyle={activeStyle}>XML Editor</NavLink>
          {/*{' | '}*/}
          {/*<NavLink to="/about" activeStyle={activeStyle}>About</NavLink>*/}
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/xml-editor" component={EditorContainer} />
          {/*<Route path="/about" component={AboutPage} />*/}
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
