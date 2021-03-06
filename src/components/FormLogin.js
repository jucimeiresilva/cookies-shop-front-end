import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import apiUtils from "../util/api.utils";
import "./Login.css"

const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await apiUtils.login({email, password});
            resetForm();
            navigate('/')
        } catch (error) {
            console.log(error.message)
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>|
            <button className="button">Submit</button>
            <div>
                <h5>Nem here? Sign Up</h5>
            </div>
            <div>
                <button className="button">Register</button>
            </div>
        </form>
    )
}

export default FormLogin;