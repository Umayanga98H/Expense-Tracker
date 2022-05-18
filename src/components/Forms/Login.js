import React,{ component } from 'react';
import './Login.css';

class Login extends component{
    state= {
        email: '',
        password: '',
        fireErrors: ''
    }

    render(){
        return(
            <>
                <form>
                    <input type="text" className="regField" placeholder="Email" name="email"/>
                    <input type="password" className="regField" placeholder="Password" name="password"/>
                    <input type="submit" className="sunmitBtn" value="Enter"/>
                </form>
            </>
        )
    }
}

export default Login;