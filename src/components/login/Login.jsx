import '../login/Login.css';
import Facebook from '../../assets/facebook.png'
import FacebookLogo from '../../assets/Facebook_Logo.png'
import { Button } from '@material-ui/core';

const Login = () => {

    // signin functions

    const signIn = () => {

    }


    return (
        <div className="login">
            <div className="login_logo">
                <img src={Facebook} alt="Facebook Logo" className="logo1" />
                <img src={FacebookLogo} className="logo2" alt="" />
                <p>Facebook helps you connect and share with the people in your life.</p>
            </div>
            <Button type="submit" onClick={signIn}>Log In</Button>
        </div>
    );
}

export default Login;