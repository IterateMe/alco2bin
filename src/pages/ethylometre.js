import React, {useEffect, useState} from 'react';
import {Button, Card, CardActions, CardContent, Typography, makeStyles, Grid, Box} from '@material-ui/core';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {Container} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import Switches from '../hw_components/Switches';
import Ethylo from '../hw_components/Ethylo';
import StartTest from '../hw_components/StartTest';
import "../style/loginPageCSS.scss";
import {Link, Route, Switch, Router, BrowserRouter} from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Ethylometre({handleLogout, renderNextPage}) {

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

    const moveToReflex = () => {
        renderNextPage("Reflex");
    };

    return (

        <Container>

            <div className={classes.root}>

                {/*Header*/}

                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <h1>Alco2bin - Éthylo Test</h1>
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
                                    Test
                                </Typography>
                                <Typography variant="body2" component="p">

                                    {/*Rajouter les onClick action pour partir, arreter ou calibrer le test*/}

                                    <StartTest/>

                                    <Divider/>

                                    <Button onClick={moveToReflex} type="submit" color="primary" endIcon={<ArrowForwardIosIcon/>}>Test Reflexes</Button>

                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Switch>
                        <Route path="/switches" component={Switches}/>
                    </Switch>
                    <Switch>
                        <Route path="/ethylometre" component={Ethylo}/>
                    </Switch>

                    {/*General informations card*/}

                    <Grid item xs>
                        <Card className={classes.rootCard}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Informations générales
                                </Typography>
                                <Typography variant="body2" component="p">
                                    <p>Cette carte va contenir les informations sur l'usager</p>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/*Settings card*/}

                    <Grid item xs={6}>
                        <Card className={classes.rootCard}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Réglages
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

                    {/*Real time data analysis card*/}

                    <Grid item xs>
                        <Card className={classes.rootCard}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Analyse des données en temps réel
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
export default Ethylometre;