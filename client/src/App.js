import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Use the Switch and Route components from React Router Dom to setup the
// routing as instructed in the Readme for this activity.. Refer to the Basic
// Example documentation if you need to. You can also look at the React Router
// activity from unit 19.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
          <Route path="/books/:id">
            <Detail />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
