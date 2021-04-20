import React, {useEffect, useState} from 'react';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
    makeStyles,
    Grid,
    Box,
} from '@material-ui/core';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {Container} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import Switches from '../hw_components/Switches';
import Ethylo from '../hw_components/Ethylo';
import StartTest from '../hw_components/StartTest';
import "../style/loginPageCSS.scss";
import {Link, Route, Switch, Router, BrowserRouter} from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Footer from "../components/footer";
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';
import ChangeDebitMinMax from "../hw_components/ChangeDebitMinMax";

function Ethylometre({handleLogout, renderNextPage}) {

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

    const moveToMain = () => {
        renderNextPage("mainDashboard");
    };

    const [counter, setCounter] = useState(0)
    const [data, setData] = useState([])
    const [xAxis, setXAxis] = useState([0])
    const [testState, setTestState] = useState(false)

    let result = []
    let tickValues = []

    const updateGraph = (value) => {
        result = data
        result.push({x:counter, y:value})
        tickValues = xAxis
        tickValues.push(counter + 1)
        setData(result)
        setXAxis(tickValues)
        setCounter(counter + 1)
    }

    const getData = (moyenne) => {  // Si le test est en marche, alors le graphique va être updaté
        if(testState==="Pending"){
            updateGraph(moyenne)
        }
    }

    const handleTestState = (state) => {
        setTestState(state)
    }

    return (

        <Container >

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

                                    {/*Rajouter les onClick action pour partir, arreter ou calibrer le test*/}

                                    <StartTest test="ethylo" handleTestState={handleTestState}/>
                                    
                                    <Divider/>
                                    <Ethylo getData={getData} handleTestSTate={handleTestState}/>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/*<Switch>
                        <Route path="/switches" component={Switches}/>
                    </Switch>
                    <Switch>
                        <Route path="/ethylometre" component={Ethylo}/>
                    </Switch>*/}

                    {/*General informations card*/}

                    <Grid item xs>
                        <Card className={classes.rootCard}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Réglages
                                </Typography>
                                {/*<Button onClick={handleClick}>ADD DATA</Button>*/}
                                <ChangeDebitMinMax/>
                                {/*<h1>{counter}</h1>*/}
                            </CardContent>
                        </Card>
                    </Grid>

                    {/*Settings card*/}

                    <Grid item xs={6}>
                        <Card className={classes.rootCard}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Informations générales
                                </Typography>
                                <Typography variant="body2" component="p">
                                    <p>
                                        <ol>
                                            <li>Déclancher le test en appuyant sur "Start Test"</li>
                                            <li>Observer l'afficheur sur le FPGA</li>
                                            <li>Souffler avec un débit adéquat dans l'ambout de 5 à 10 secondes</li>
                                            <li>Suivre les instructions sur le FPGA afin de maintenir un souffle adéquat</li>
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
                            <CardContent >
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Analyse des données en temps réel
                                </Typography>
                                        <VictoryChart
                                            height={150}
                                            width={400}
                                            theme={VictoryTheme.material}
                                        >
                                            <VictoryLine
                                                data={data}
                                            />
                                            <VictoryAxis crossAxis
                                                         tickValues={xAxis}
                                                         style={{
                                                             tickLabels: {fontSize: 5, padding: 2}
                                                         }}
                                                         standalone={false}
                                            />
                                            <VictoryAxis dependentAxis crossAxis

                                                         style={{
                                                             tickLabels: {fontSize: 5, padding: 2}
                                                         }}
                                                         domain={[0, 0.2]}
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
export default Ethylometre;