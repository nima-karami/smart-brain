import React, { useState } from "react";


const Signin = ({ onRouteChange, loadUser }) => {

    const [signInEmail, setSignInEmail] = useState('');
    const [signInPass, setSignInPass] = useState('');

    const onEmailChange = (event) => {
        setSignInEmail(event.target.value);
        // console.log(signInEmail)
    }

    const onPassChange = (event) => {
        setSignInPass(event.target.value);
        // console.log(signInPass)
    }

    const onSubmitSignIn = (event) => {
        event.preventDefault();
        console.log("user: ", signInEmail);
        console.log("pass: ", signInPass);
        

        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: signInEmail,
                password: signInPass
                })
            
            })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    loadUser(user);
                    onRouteChange('home');
                } else {
                    alert(user)
                }
        })
    }

    return (
        <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
            <div className="center pv4">
                <main className="pa4 black-80">
                    <form className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f3 fw6 ph0 mh0 center">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email" name="email-address"  id="email-address"
                                    onChange={onEmailChange}/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password" name="password"  id="password"
                                    onChange={onPassChange}/>
                            </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                             type="submit" value="Sign in"
                             onClick={onSubmitSignIn}/>
                        </div>
                        <div className="lh-copy mt3">
                            <p className="f6 link dim black db pointer" onClick={() => onRouteChange('register')}>Register</p>
                        
                        </div>
                    </form>
                </main>

            </div>
        </article>
        
    )
}

export default Signin;