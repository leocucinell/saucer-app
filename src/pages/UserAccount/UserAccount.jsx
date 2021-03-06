import './UserAccount.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { updateUser } from '../../api/updateUser';
import { setCurrentUser } from '../../features/currentUserSlice';
import { removeCurrentUser } from '../../features/currentUserSlice';

import api from '../../api/api';

const UserAccount = () => {

    const navigate = useNavigate();
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
    }, []);

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
    const handleLogout = async (e) => {
        //call the logout_user function in the backend
        //remove the current user from local storage
        //navigate user back to the landing page
        e.preventDefault()
        try{
            console.log(currentUser)
            await api.post(
                'auth/logout',
                {
                    username: username
                }
            ).then(() => {
                dispatch(removeCurrentUser());
                localStorage.removeItem('SaucerCurrentUser');
            }).then(() => {
                navigate('/');
            })
        } catch(err) {
            console.log(err);
            return err;
        }
    }

    const handleDelete = (e) => {
        //make api call to delete the user from the db
        //remove the urrent user from local storage
        //navigate back to landing page
        e.preventDefault()
        console.log("DELETE ACCOUNT")
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
                    <button onClick={(e) => handleLogout(e)}>Log out</button>
                    <hr />
                    <button onClick={(e) => handleDelete(e)}>Delete Account</button>
                </form>
            </div>
        </div>
    );
}

export default UserAccount;