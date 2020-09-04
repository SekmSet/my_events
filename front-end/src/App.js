import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Header from "./components/Header/Header"
import Regist from "./components/Auth/Regist"
import Login from "./components/Auth/Login"
import EventsShow from "./components/Events/eventShow";
import Facebook from "./components/Auth/Facebook";
import Event from "./components/Events/event";

import "./style/App.scss";
import Me from "./components/Profil/Me"
import Profil from "./components/Profil/Profil"
import Update from "./components/Profil/Update"
import {showProfil} from "./_actions/user_actions";
import RouteAuth from "./components/componentModels/RouteAuth";

function App() {
    const dispatch = useDispatch();
    const {loginSucces} = useSelector((state) => state.user);

    useEffect(() => {
        if(loginSucces){
            showProfil().then((user) => dispatch(user));
        }
    }, [dispatch, loginSucces]);

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
                <Route path="/events" >
                     <EventsShow />
                </Route>
                <Route path="/event/:id">
                    <Event />
                </Route>
                <Route path="/profil/:id">
                    <Profil />
                </Route>

                <RouteAuth path="/me/update">
                    <Update />
                </RouteAuth>
                <RouteAuth path="/me">
                    <Me />
                </RouteAuth>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
