import React, {useState} from "react";
import "../App.css"
import Icon from "../img/icon.png"



function Login (props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const HandleSubmit =(e)=>{
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="container">
            <form className="login-form">
                <img className='icon'  src={ Icon }/>
                <h2>Sign Up</h2>
                <label htmlFor="email">Email</label>
                <input value={email}onChange={(e) => setEmail(e.target.value)} type="email" placeholder = "email" id="email" name="email" />
                <label htmlFor="userPassword">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder = "********" id="userPassword" name="password" minLength="8" required/>
            <button type="submit"><h3>Sign Up</h3></button>
            </form>

            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            <p>Copyright © Your Website 2022</p>
        </div>
    )
}

export default Login;