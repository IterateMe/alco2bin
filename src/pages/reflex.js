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
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Footer from "../components/footer";
import {VictoryBar, VictoryChart, VictoryTheme, VictoryStack, VictoryAxis} from 'victory';

function Reflex({handleLogout, renderNextPage}) {

    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
        },
        rootCard: {
            display: 'inline-block',
            marginTop: 25,
            width: "100%",
            boxShadow: "1px 3px 15px #9E9E9E",
            borderRadius: 10,
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

    const moveToEthylo = () => {
        renderNextPage("Ethylometre");
    };

    const moveToMain = () => {
        renderNextPage("mainDashboard");
    };

    const data = [
        [{a:"Result", b:10}],
        [{a:"Result", b:20}]
    ];

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

                <div>
                    <Button onClick={moveToMain} type="submit" color="primary" startIcon={<ArrowBackIosIcon/>}>Acceuil</Button>
                </div>

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

                                    <StartTest/>

                                    <Divider/>


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
                                    <p>
                                        <ol>
                                            <li>Déclancher le test en appuyant sur "Start Test"</li>
                                            <li>Appuyer rapidement sur le bouton lorsque le LED s'allume sur le FPGA</li>
                                            <li>Attendre le résultat apparaître sur le FPGA ou cette interface</li>
                                        </ol>
                                    </p>
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
                                <VictoryChart
                                    height={150}
                                    width={400}
                                    theme={VictoryTheme.material}
                                    domainPadding={{ x: 10 }}
                                >
                                    <VictoryStack horizontal
                                        colorScale={["black", "blue"]}
                                    >
                                        <VictoryBar
                                            data={[{x:"Résultat", y:100}]}
                                        />

                                        <VictoryBar
                                            data={[{x:"Résultat", y:200}]}
                                        />
                                    </VictoryStack>
                                    <VictoryAxis crossAxis
                                                 tickValues={["Résultat"]}
                                                 style={{
                                                     tickLabels: {fontSize: 5, padding: 20}
                                                 }}
                                                 standalone={false}
                                    />
                                    <VictoryAxis dependentAxis crossAxis

                                                 style={{
                                                     tickLabels: {fontSize: 5, padding: 20}
                                                 }}
                                                 domain={[0, 1000]}
                                                 theme={VictoryTheme.material}
                                                 standalone={false}
                                    />
                                </VictoryChart>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>

            <Footer/>

        </Container>

    );
}
export default Reflex;