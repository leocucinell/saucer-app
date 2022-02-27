import './Landing.css'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import FormContainer from '../../components/FormContainer/FormContainer';

const Landing = () => {

    const navigator = useNavigate();
    const currentUser = useSelector((state) => state.currentUser.value);
    
    useEffect(() => {
        if(currentUser){
            navigator('/customerHome');
        }
    }, [currentUser, navigator])

    return(
        <div className="Landing-page">
            <FormContainer message="welcome"/>
        </div>
    );
}

export default Landing;