import '../login/Login.css';
import Facebook from '../../assets/facebook.png'
import FacebookLogo from '../../assets/Facebook_Logo.png'
import { Button } from '@material-ui/core';
import auth from "../../firebase";
import provider from '../../firebase';
import { signInWithPopup } from "firebase/auth";
// import { actionTypes } from './reducer';
// import { useStateValue } from './ContextProvider';
import { signInWithGoogle } from '../../firebase';
import { actionTypes } from '../../reducer';
import { useStateValue } from '../../ContextProvider';



const Login = () => {

    // google sign in pop up
    // const [state, dispatch] = useStateValue();

    const sigInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            // pass user cred in data layer
            console.log(result)
        }).catch((error) => {
            console.log(error)
        });
    }
    // dispatch({
    //     type: actionTypes.SET_USER,
    //     user: result.user,
    // })
    // console.log(result.user);

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