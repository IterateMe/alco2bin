import React from 'react';
import {Button} from '@material-ui/core';

const Login = (props) => {

    const {email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError} = props;

    return (
        <section>
            <div>
                <label>Adresse courriel</label>
                <br/>
                <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p>{emailError}</p>

                <label>Mot de passe</label>
                <br/>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p>{passwordError}</p>
            </div>

            <div>
                {hasAccount ? (
                    <>
                        <Button onClick={handleLogin}>Connexion</Button>
                        <p>Pas inscrit? <span onClick={() => setHasAccount(!hasAccount)}>S'inscrire</span></p>
                    </>
                ) : (
                    <>
                        <Button onClick={handleSignup}>S'inscrire</Button>
                        <p>Deja inscrit? <span onClick={() => setHasAccount(!hasAccount)}>Se connecter</span></p>
                    </>
                )}
            </div>

        </section>
    );
}

export default Login;