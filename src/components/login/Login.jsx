import '../login/Login.css';
import Facebook from '../../assets/facebook.png'
import FacebookLogo from '../../assets/Facebook_Logo.png'
import { Button } from '@material-ui/core';
import auth from "../../firebase";
import provider from '../../firebase';

const Login = () => {

    // signin functions

    const signIn = () => {
        auth.signInWithPopUp(provider).then(result => {
            console.log(result)
        }).catch((error) => alert(error.message));
    }


    return (
        <div className="login">
            <div className="login_logo">
                <img src={Facebook} alt="Facebook Logo" className="logo1" />
                <img src={FacebookLogo} className="logo2" alt="" />
                <p>Facebook helps you connect and share with the people in your life.</p>
            </div>
            {/* <Button type="submit" onClick={signIn}>Log In</Button> */}
        </div>
    );
}

export default Login;