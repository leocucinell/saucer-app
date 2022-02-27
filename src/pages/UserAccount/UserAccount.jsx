import './UserAccount.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const UserAccount = () => {

    const currentUser = useSelector((state) => state.currentUser);
    console.log(currentUser);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return(
        <div className="userAccount-container">
            <div className="user-update-form-container">
                <form className='user-update-form'>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} className='update-input' type="text" placeholder="username" />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='update-input' type="text" placeholder="email" />
                    <input value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} className='update-input' type="text" placeholder="phone number" />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='update-input' type="text" placeholder="password" />
                    <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='update-input' type="text" placeholder="confirm password" />
                    <button>Confirm</button>
                    <hr />
                    <button>Delete</button>
                </form>
            </div>
        </div>
    );
}

export default UserAccount;