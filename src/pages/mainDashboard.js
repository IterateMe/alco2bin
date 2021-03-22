import React, {useEffect, useState} from 'react';
import {Button, Card, CardActions, CardContent, Typography, makeStyles, Grid, Box} from '@material-ui/core';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { Container } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import Switches from '../hw_components/Switches';
import Ethylometre from '../hw_components/Ethylo';
import "../style/loginPageCSS.scss";
import {Link, Route, Switch} from "react-router-dom";

function MainDashboard({handleLogout}) {

    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
        },
        rootCard: {
            display: 'inline-block',
            marginTop: 25,
            width: "100%" ,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 25,
            color: "black",
        },
        pos: {
            marginBottom: 12,
        },
    });

    const classes = useStyles();

    return (

        <Container>

            <div className={classes.root}>

                {/*Header*/}

                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <h1>Alco2bin</h1>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display="flex" flexDirection="row-reverse" alignItems="center" className="paddingTop">
                            <Button onClick={handleLogout}>Se deconnecter</Button>
                        </Box>
                    </Grid>
                </Grid>

                {/*First row dashboard*/}

                <Grid container spacing={3}>

                    {/*Test card*/}

                    <Grid item xs>
                        <Card className={classes.rootCard}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Tests
                                </Typography>
                                <Typography variant="body2" component="p">
                                    <Link to="/switches">
                                        <Button type="submit" color="primary">Switches</Button>
                                    </Link>
                                    <Divider/>
                                    <Link to="/ethylometre">
                                        <Button type="submit" color="primary">Ethylometre</Button>
                                    </Link>

                                    <Switch>
                                        <Route path="/switches" component={Switches}/>
                                    </Switch>
                                    <Switch>
                                        <Route path="/ethylometre" component={Ethylometre}/>
                                    </Switch>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/*Profil card*/}

                    <Grid item xs>
                        <Card className={classes.rootCard}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Profil
                                </Typography>
                                <Typography variant="body2" component="p">
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
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/*Top 5 card*/}

                    <Grid item xs={6}>
                        <Card className={classes.rootCard}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Top 5
                                </Typography>
                                <Typography variant="body2" component="p">
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
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {/*Second row dashboard*/}

                <Grid container>

                    {/*Historique card*/}

                    <Grid item xs>
                        <Card className={classes.rootCard}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Historique
                                </Typography>
                                <Typography variant="body2" component="p">
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
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </div>

        </Container>

    );
}


export default MainDashboard;