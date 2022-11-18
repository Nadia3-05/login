import React, {useState} from 'react';
import "../App.css"
import Icon from "../img/icon.png"


function Register(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const HandleSubmit =(e)=>{
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="container">
            <img  className='icon' src={ Icon }/>
           <h2>Register</h2>
        <form className="register-form">
            <label htmlFor="name">Full Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="name" name="name" placeholder = "Full Name" id="name" minLength="30"/>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder = "email" id="email" name="email"/>
            <label htmlFor="userPassword">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder = "********" id="userPassword" name="password" minLength="8"  required/>
        <button type="submit"><h3>Sign Up</h3></button>
        </form>

        <button className="link-btn"  onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}

export default Register;