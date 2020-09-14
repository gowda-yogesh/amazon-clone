import React, { useState } from 'react';
import './login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                console.log("auth success---", auth)
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                    console.log("registration sucess full", auth)
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>

            <Link to='/'>
                <img alt="logo"
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>

                <p>
                    This is a project by <strong>Yogesh C Gowda</strong> ,
                    If ur interested in my work contact me
                    <strong>-</strong>
                    <br />
                    <strong>9945571239</strong>
                    <br />
                    <strong>yogc1996@gmail.com</strong>
                </p>


            </div>
        </div>
    )
}

export default Login