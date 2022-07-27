import React, { useState } from "react";


const Register = ({ onRouteChange, loadUser }) => {

    const [registerName, setRegisterName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPass, setRegisterPass] = useState('');

    const onNameChange = (event) => {
        setRegisterName(event.target.value);
    }

    const onEmailChange = (event) => {
        setRegisterEmail(event.target.value);
    }

    const onPassChange = (event) => {
        setRegisterPass(event.target.value);
    }

    const onSubmitRegister = (event) => {
        event.preventDefault();
        // console.log("name: ", registerName);
        // console.log("email: ", registerEmail);
        // console.log("pass: ", registerPass);
        

        fetch('https://nk-smart-brain-api.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: registerName,
                email: registerEmail,
                password: registerPass
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
                            <legend className="f3 fw6 ph0 mh0 center">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" onChange={onNameChange}/>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={onEmailChange}/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={onPassChange}/>
                            </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                             type="submit" value="Register"
                             onClick={onSubmitRegister}/>
                        </div>
                    </form>
                </main>

            </div>
        </article>
        
    )
}

export default Register;