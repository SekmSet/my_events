import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import Regist from "./components/Auth/Regist"
import Login from "./components/Auth/Login"
import Facebook from "./components/Auth/Facebook"
import Me from "./components/Profil/Me"

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Switch>
                <Route path="/register" >
                    <Regist />
                    <Login />
                    <Facebook />
                </Route>

                <Route path="/me">
                    <Me />
                </Route>
            </Switch>
     </Router>
    </div>
  );
}

export default App;
