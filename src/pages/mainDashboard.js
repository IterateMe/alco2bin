import React, {useEffect, useState} from 'react';
import {Button, Card, CardActions, CardContent, Typography, makeStyles, Grid, Box} from '@material-ui/core';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {Container} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import Ethylometre from '../hw_components/Ethylo';
import Footer from '../components/footer';
import "../style/loginPageCSS.scss";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function MainDashboard({handleLogout, renderNextPage, userName}) {


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

    const moveToReflex = () => {
        renderNextPage("Reflex");
    };

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
                                <Typography variant="body2" component="span">

                                    <Button onClick={moveToReflex} type="submit" color="primary"
                                            endIcon={<ArrowForwardIosIcon/>}>Test de réflexes</Button>

                                    <Divider/>

                                    <Button onClick={moveToEthylo} type="submit" color="primary"
                                            endIcon={<ArrowForwardIosIcon/>}>Ethylometre</Button>

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
                                <Typography variant="body2" component="span">
                                    Cette carte va contenir les informations sur l'usager
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
                                <Typography variant="body2" component="span">
                                    Cette carte va contenir le palmares des etudiants qui ont brises les records sous forme de tableau
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
                                <Typography variant="body2" component="span">
                                    Cette carte va contenir des tableaux et des graphiques representant la manipulations et l'archivage des donnees propre a l'usager connecte
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>

            <Footer/>

        </Container>

    );
}


export default MainDashboard;