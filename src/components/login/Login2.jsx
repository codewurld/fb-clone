import '../login/Login.css';
import Facebook from '../../assets/facebook.png'
import FacebookLogo from '../../assets/Facebook_Logo.png'
import { Button } from '@material-ui/core';
import { auth } from '../../firebase'
import { provider } from '../../firebase';
import { signInWithPopup } from "firebase/auth";
import { actionTypes } from '../../reducer';
import { useStateValue } from '../../ContextProvider';
import { Link } from 'react-router-dom';

// temporary login component for demo rendering
const Login = () => {

    const [state, dispatch] = useStateValue();

    // google sign in pop up
    const sigInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            // pass user cred in data layer
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result.user);
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <div className="login">
            <div className="login_logo">
                <img src={Facebook} alt="Facebook Logo" className="logo1" />

                <p>This is a clone demo site built for the purpose of learning. <br />
                    Login does not require an email address.<br /> [Web version: best viewed on a computer/laptop.]
                </p>

            </div>
            <Link to="/home" style={{ textDecoration: 'none' }}>
                <Button id="loginBtn">Log In</Button>
            </Link>



        </div>
    );
}

export default Login;