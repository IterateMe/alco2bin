import './App.css';
import React, {useEffect, useState} from 'react';
import MainDashboard from './pages/mainDashboard';
import Ethylometre from './pages/ethylometre';
import Reflex from './pages/reflex';
import LoginCard from './components/card/loginCard';
import {makeStyles} from "@material-ui/core";
import fire from './fire';

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary
    }
}));

const App = () => {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState('');

    const clearInputs = () => {
        setEmail("");
        setPassword("");
    };

    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    };

    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disable":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            })
    };

    const handleSignUp = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            })
    };

    const handleLogout = () => {
        fire.auth().signOut();
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);

    const classes = useStyles();

    return (

            <div className="App">
                {user ? (
                    // <MainDashboard handleLogout={handleLogout}/>
                    // <Ethylometre handleLogout={handleLogout}/>
                    <Reflex handleLogout={handleLogout}/>
                ) : (
                    <LoginCard
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                    handleSignup={handleSignUp}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError}
                    />
                )}
            </div>
    );
};


export default App;

