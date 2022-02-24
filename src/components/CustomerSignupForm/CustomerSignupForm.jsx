import './CustomerSignupForm.css'
import { useState } from 'react';

const CustomerSignupForm = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleChanges = (e, caller) => {
        switch(caller){
            case 'username':
                setUsername(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'phone':
                setPhone(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            case 'confirm':
                setConfirmPassword(e.target.value);
                break
            default:
                console.log('No Such Case...')
        }
    }

    return(
        <div className="customer-signup-form-container">
            <form className='customer-signup-form'>
                <input 
                    onChange={(e) => handleChanges(e, 'username')} 
                    value={username}
                    type="text" 
                    placeholder="username" 
                    name="username" 
                /> 
                <input 
                    onChange={(e) => handleChanges(e, 'email')} 
                    value={email}
                    type="text" 
                    placeholder="email" 
                    name="email" 
                /> 
                <input 
                    onChange={(e) => handleChanges(e, 'phone')} 
                    value={phone}
                    type="text" 
                    placeholder="phone number" 
                    name="phone" 
                /> 
                <input 
                    onChange={(e) => handleChanges(e, 'password')} 
                    value={password}
                    type="text" 
                    placeholder="password" 
                    name="password" 
                /> 
                <input 
                    onChange={(e) => handleChanges(e, 'confirm')} 
                    value={confirmPassword}
                    type="text" 
                    placeholder="confirm password" 
                    name="confirmPassword" 
                />
                <button>Sign up</button>
            </form>
        </div>
    );
}

export default CustomerSignupForm;