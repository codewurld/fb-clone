import '../login/Login.css';
import Facebook from '../../assets/facebook.png'
import FacebookLogo from '../../assets/Facebook_Logo.png'
import { Button } from '@material-ui/core';
import auth from "../../firebase";
import provider from '../../firebase';


import { signInWithGoogle } from '../../firebase';



const Login = () => {

    // signin functions

    return (
        <div className="login">
            <div className="login_logo">
                <img src={Facebook} alt="Facebook Logo" className="logo1" />
                <img src={FacebookLogo} className="logo2" alt="" />
                <p>Facebook helps you connect and share with the people in your life.</p>
            </div>
            <Button type="submit" onClick={signInWithGoogle}>Log In</Button>
        </div>
    );
}

export default Login;