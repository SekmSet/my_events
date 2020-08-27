import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import Log from "./components/Auth/Log"

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Switch>
                <Route path="/register" >
                    <Log />
                </Route>
            </Switch>
     </Router>
    </div>
  );
}

export default App;
