import React, {useEffect, useState} from 'react';
import {Button, Card, CardActions, CardContent, Typography, makeStyles, Grid, Box} from '@material-ui/core';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {Container} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import Switches from '../hw_components/Switches';
import Ethylometre from '../hw_components/Ethylo';
import "../style/loginPageCSS.scss";
import {Link, Route, Switch, Router, BrowserRouter} from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function MainDashboard({handleLogout}) {

    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
        },
        rootCard: {
            display: 'inline-block',
            marginTop: 25,
            width: "100%",
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

                                    {/*Rajouter les onClick action pour changer le state de la page (afficher les differents dashboard)*/}

                                    <Button type="submit" color="primary" endIcon={<ArrowForwardIosIcon/>}>Switches</Button>

                                    <Divider/>

                                    <Button type="submit" color="primary" endIcon={<ArrowForwardIosIcon/>}>Ethylometre</Button>

                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Switch>
                        <Route path="/switches" component={Switches}/>
                    </Switch>
                    <Switch>
                        <Route path="/ethylometre" component={Ethylometre}/>
                    </Switch>

                    {/*Profil card*/}

                    <Grid item xs>
                        <Card className={classes.rootCard}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Profil
                                </Typography>
                                <Typography variant="body2" component="p">
                                    <p>Cette carte va contenir les informations sur l'usager</p>
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
                                    <p>Cette carte va contenir le palmares des etudiants qui ont brises les records sous forme de tableau</p>
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
                                    <p>Cette carte va contenir des tableaux et des graphiques representant la manipulations et l'archivage des donnees propre a l'usager connecte</p>
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