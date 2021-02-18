import React, {useEffect, useState} from 'react';
import { Button } from '@material-ui/core';
import LoginCard from '../components/card/loginCard';
import Switches from '../hw_components/Switches';
import "../style/loginPageCSS.scss";
import {Link, Route, Switch} from "react-router-dom";

function MainDashboard({handleLogout}) {

    return (
        // <Router>
        <div className="App">
            <Switches/>
            <LoginCard/>
            <Button onClick={handleLogout}>Se deconnecter</Button>
            {/*<Link to="/mainDashboard" className={classes.link}>*/}
            {/*    <Button type="submit" color="primary">Connexion</Button>*/}
            {/*</Link>*/}

            {/*<Switch>*/}
            {/*    <Route path="/mainDashboard" component={MainDashboard}/>*/}
            {/*</Switch>*/}
        </div>
        // <Router/>
    );
}


export default MainDashboard;