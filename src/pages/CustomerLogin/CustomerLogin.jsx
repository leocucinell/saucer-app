import './CustomerLogin.css'

import CustomerLoginForm from '../../components/CustomerLoginForm/CustomerLoginForm';

const CustomerLogin = () => {
    return(
        <div className="CustomerLogin-page">
            <span>Log in</span>
            <CustomerLoginForm />
        </div>
    )
}

export default CustomerLogin;