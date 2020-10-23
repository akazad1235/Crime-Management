import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './Pages/HomePage';


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
