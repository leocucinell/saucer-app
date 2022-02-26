import './CustomerLoginForm.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../features/currentUserSlice';
import { useNavigate } from 'react-router';

import api from '../../api/api';

const CustomerLoginForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const loggedInUser = await api.post('auth/login', {
                username,
                password
            });
            console.log('~ LOGGED IN USER ~')
            console.log(loggedInUser)
            console.log('~~~~~~~~~~~~~~~~~~')
            const data = loggedInUser.data
            dispatch(setCurrentUser(data));
            //add the current user to local storage
            localStorage.setItem('SaucerCurrentUser', JSON.stringify(data));
            navigate('/customerHome');
        } catch {
            console.log('ERROR LOGGING USRE IN, Please try again');
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
                <button 
                    onClick={handleSubmit}
                    className="landing-button"
                >Log in</button>
            </form>
        </div>
    );
}

export default CustomerLoginForm;