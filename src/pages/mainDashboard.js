import React, {useEffect, useState} from 'react';
import { Button } from '@material-ui/core';
import Switches from '../hw_components/Switches';
import Ethylometre from '../hw_components/Ethylo';
import "../style/loginPageCSS.scss";
import {Link, Route, Switch} from "react-router-dom";

function MainDashboard({handleLogout}) {

    return (

        <div className="App">


            <Link to="/switches">
                <Button type="submit" color="primary">Switches</Button>
            </Link>
            <Link to="/ethylometre">
                <Button type="submit" color="primary">Ethylometre</Button>
            </Link>

            <Switch>
                <Route path="/switches" component={Switches}/>
            </Switch>
            <Switch>
                <Route path="/ethylometre" component={Ethylometre}/>
            </Switch>

            <Button onClick={handleLogout}>Se deconnecter</Button>
        </div>

    );
}


export default MainDashboard;