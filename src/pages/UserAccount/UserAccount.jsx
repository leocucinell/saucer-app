import './UserAccount.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../api/updateUser';
import { setCurrentUser } from '../../features/currentUserSlice';

const UserAccount = () => {

    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.currentUser);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");

    useEffect(() => {
        if(currentUser.value === null) return;
        setUsername(currentUser.value.username);
        setEmail(currentUser.value.email);
        setphoneNumber(currentUser.value.phoneNumber);
    }, [currentUser]);

    const validateInputs = () => {
        if(username === "" || email === "" || phoneNumber === "") return false;
        return true;
    }

    const handleUpdate = (e) => {
        //make api call to update user
        //update the current user in redux
        e.preventDefault()
        if(validateInputs){
            updateUser(currentUser.value.id, username, email, phoneNumber).then((result) => {
                const newUser = {
                    accessToken: currentUser.value.accessToken,
                    refreshToken: result.data.userData.refreshToken,
                    phoneNumber: result.data.userData.phoneNumber,
                    username: result.data.userData.username,
                    email: result.data.userData.email,
                    id: currentUser.value.id
                }
                dispatch(setCurrentUser(newUser));
            });
        }
    }

    //TODO: The below methods
    const handleLogout = () => {
        //make api call to remove the refreshToken in backend,
        //remove the current user from local storage
        //navigate user back to the landing page
    }

    const handleDelete = () => {
        //make api call to delete the user from the db
        //remove the urrent user from local storage
        //navigate back to landing page
    }

    return(
        <div className="userAccount-container">
            <div className="user-update-form-container">
                <form className='user-update-form'>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} className='update-input' type="text" placeholder="username" />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='update-input' type="text" placeholder="email" />
                    <input value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} className='update-input' type="text" placeholder="phone number" />
                    <button onClick={(e) => handleUpdate(e)}>Confirm</button>
                    <hr />
                    <button>Log out</button>
                    <hr />
                    <button>Delete Account</button>
                </form>
            </div>
        </div>
    );
}

export default UserAccount;