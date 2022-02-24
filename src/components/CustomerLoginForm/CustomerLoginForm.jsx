import './CustomerLoginForm.css'
import { useState } from 'react';

const CustomerLoginForm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChanges = (e, caller) => {
        switch(caller){
            case 'username':
                setUsername(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            default:
                console.log('Unreachable case');
        }
    }

    return(
        <div className='customer-login-form-container'>
            <form className="customer-login-form">
                <input 
                    className="login-input" 
                    type="text" 
                    placeholder="username" 
                    name="username" 
                    value={username}
                    onChange={(e) => handleChanges(e, "username")}
                />
                <input 
                    className="login-input" 
                    type="text" 
                    placeholder="password" 
                    name="password" 
                    value={password}
                    onChange={(e) => handleChanges(e, "password")}
                />
                <button className="landing-button">Log in</button>
            </form>
        </div>
    );
}

export default CustomerLoginForm;