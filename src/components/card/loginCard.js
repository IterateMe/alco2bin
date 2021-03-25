import React from "react";
import {Button, TextField} from '@material-ui/core';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import Background from "../../image/loginBackground.svg"
import  '../../style/loginPageCSS.scss';
import * as url from "url";

const LoginCard = (props) => {

    const {email, setEmail, userName, setuserName, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError} = props;

    const BootstrapButton = withStyles({
        root: {
            boxShadow: 'none',
            textTransform: 'none',
            fontSize: 16,
            padding: '6px 12px',
            border: '1px solid',
            lineHeight: 1.5,
            backgroundColor: 'rgba(5, 142, 217, 1)',
            borderColor: 'rgba(5, 142, 217, 1)',
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            '&:hover': {
                backgroundColor: '#0069d9',
                borderColor: '#0062cc',
                boxShadow: 'none',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#0062cc',
                borderColor: '#005cbf',
            },
            '&:focus': {
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
            },
        },
    })(Button);

    const CssTextField = withStyles({
        root: {
            '& label.Mui-focused': {
                color: 'rgba(5, 142, 217, 1)',
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: 'rgba(5, 142, 217, 1)',
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: 'red',
                },
                '&:hover fieldset': {
                    borderColor: 'yellow',
                },
                '&.Mui-focused fieldset': {
                    borderColor: 'rgba(5, 142, 217, 1)',
                },
            },
        },
    })(TextField);

    const useStyles = makeStyles((theme) => ({
        margin: {
            margin: theme.spacing(1),
        },
    }));


    const classes = useStyles();

    const [loginButtonClicked, handleLoginButtonClicked] = React.useState(false);
    const textFieldForUsernameRef = React.useRef(null);
    const textFieldForPasswordRef = React.useRef(null);
    const buttonForLoginRef = React.useRef(null);

    return (
        <div className="background" >
            <div className="loginCard">
                <div className="flexWrapperOne">
                    {hasAccount ? (
                        <>
                        <TextField
                            type="text"
                            autoFocus
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            label="Adresse courriel"
                            className={classes.margin}
                            inputRef={textFieldForUsernameRef}
                            inputProps={{
                                onKeyPress: event => {
                                    const { key } = event;
                                    console.log(key);
                                    if (key === "Enter") {
                                        textFieldForPasswordRef.current.focus();
                                    }
                                }
                            }}
                        />
                        <p>{emailError}</p>
                        <TextField
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        label="Mot de passe"
                        className={classes.margin}
                        inputRef={textFieldForPasswordRef}
                        inputProps={{
                        onKeyPress: event => {
                        const { key } = event;
                        console.log(key);
                        if (key === "Enter") {
                        buttonForLoginRef.current.click();
                    }
                    }
                    }}
                        />
                        <p>{passwordError}</p>
                        </>) : (<>
                        <TextField
                            type="text"
                            autoFocus
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            label="Adresse courriel"
                            className={classes.margin}
                            inputRef={textFieldForUsernameRef}
                            inputProps={{
                                onKeyPress: event => {
                                    const { key } = event;
                                    console.log(key);
                                    if (key === "Enter") {
                                        textFieldForPasswordRef.current.focus();
                                    }
                                }
                            }}
                        />
                        <p>{emailError}</p>
                        <TextField
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                            label="Mot de passe"
                            className={classes.margin}
                            inputRef={textFieldForPasswordRef}
                            inputProps={{
                                onKeyPress: event => {
                                    const { key } = event;
                                    console.log(key);
                                    if (key === "Enter") {
                                        buttonForLoginRef.current.click();
                                    }
                                }
                            }}
                        />
                        <p>{passwordError}</p>
                    </>)}
                    <TextField
                        type="text"
                        autoFocus
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        label="Adresse courriel"
                        className={classes.margin}
                        inputRef={textFieldForUsernameRef}
                        inputProps={{
                            onKeyPress: event => {
                                const { key } = event;
                                console.log(key);
                                if (key === "Enter") {
                                    textFieldForPasswordRef.current.focus();
                                }
                            }
                        }}
                    />
                    <p>{emailError}</p>
                    <TextField
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        label="Mot de passe"
                        className={classes.margin}
                        inputRef={textFieldForPasswordRef}
                        inputProps={{
                            onKeyPress: event => {
                                const { key } = event;
                                console.log(key);
                                if (key === "Enter") {
                                    buttonForLoginRef.current.click();
                                }
                            }
                        }}
                    />
                    <p>{passwordError}</p>
                    <div className="center">
                        {hasAccount ? (
                            <>
                                <BootstrapButton onClick={handleLogin} variant="contained" color="primary" className={classes.margin} fullWidth buttonRef={buttonForLoginRef}>Connexion</BootstrapButton>
                            </>
                        ) : (
                            <>
                                <BootstrapButton onClick={handleSignup} variant="contained" color="primary" className={classes.margin} fullWidth buttonRef={buttonForLoginRef}>S'inscrire</BootstrapButton>
                            </>
                        )}
                    </div>
                    <div className="center">
                        {hasAccount ? (
                            <>
                                <p>Pas inscrit? <span onClick={() => setHasAccount(!hasAccount)} className="primaryColor">S'inscrire</span></p>
                            </>
                        ) : (
                            <>
                                <p>Déjà inscrit? <span onClick={() => setHasAccount(!hasAccount)} className="primaryColor">Se connecter</span></p>
                            </>
                        )}
                    </div>
                </div>
                <div className="flexWrapperThree">
                    <p className="a2b">a2b</p>
                </div>
            </div>
        </div>
    );
};

export default LoginCard;