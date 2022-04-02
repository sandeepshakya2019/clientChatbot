import React from "react";

import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
        <Redirect path="/" />
      </Switch>
    </Router>
  );
};

export default App;
