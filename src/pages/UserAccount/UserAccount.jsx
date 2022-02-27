import './UserAccount.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const UserAccount = () => {

    const currentUser = useSelector((state) => state.currentUser);
    console.log(currentUser.value.userData)

    const [username, setUsername] = useState(currentUser.value.userData.username);
    const [email, setEmail] = useState(currentUser.value.userData.email);
    const [phoneNumber, setphoneNumber] = useState(currentUser.value.userData.phoneNumber);

    return(
        <div className="userAccount-container">
            <div className="user-update-form-container">
                <form className='user-update-form'>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} className='update-input' type="text" placeholder="username" />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='update-input' type="text" placeholder="email" />
                    <input value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} className='update-input' type="text" placeholder="phone number" />
                    <button>Confirm</button>
                    <hr />
                    <button>Delete</button>
                </form>
            </div>
        </div>
    );
}

export default UserAccount;