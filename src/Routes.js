import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Test from './components/Test';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/test" exact component={Test} />
            </Switch>
        </Router>
    )
}

export default Routes;