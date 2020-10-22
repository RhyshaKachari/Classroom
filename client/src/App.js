import React from "react";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from "./Components/home.component";
import Login from "./Components/login.component";
import Logout from "./Components/logout.component";
import Register from "./Components/register.component";

const App = () => (
    <Router>
        <Switch>
            <Route exact path = "/" component = {Home} />
            <Route path = "/login" component = {Login} />
            <Route path = "/register" component = {Register} />
            <Route path = "/logout" component = {Logout} />
        </Switch>
    </Router>
)

export default App;