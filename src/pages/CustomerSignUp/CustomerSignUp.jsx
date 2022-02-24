import './CustomerSignUp.css'

import CustomerSignupForm from '../../components/CustomerSignupForm/CustomerSignupForm';

const CustomerSignUp = () => {
    return(
        <div className="CustomerSignUp-page">
            <span>Sign Up</span>
            <CustomerSignupForm />
        </div>
    );
}

export default CustomerSignUp;