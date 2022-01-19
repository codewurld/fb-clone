import '../login/Login.css';
import Facebook from '../../assets/facebook.png'
import FacebookLogo from '../../assets/Facebook_Logo.png'
import { Button } from '@material-ui/core';
// import firebase from './firebase';
import { auth } from "../../firebase";
import { provider } from '../../firebase';
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
// import { actionTypes } from './reducer';
// import { useStateValue } from './ContextProvider';
import { signInWithGoogle } from '../../firebase';
import { actionTypes } from '../../reducer';
import { useStateValue } from '../../ContextProvider';
// import firebase from '../../firebase'


const Login2 = () => {

    // google sign in pop up w/ firebase


    // const handleOnClick = async (provider) => {
    //     const res = await signnInWithGoogle(provider);
    //     console.log(res)
    // }


    // signInWithPopup(auth, provider)
    //         .then(result => {

    //             dispatch({
    //                 type: actionTypes.SET_USER,
    //                 user: result.user
    //             })
    //             console.log(result.user)
    //         })
    //         .catch((error) => alert(error.message))
    const [state, dispatch] = useStateValue();

    // const signIn = () => {
    //     // Creates the provider object.
    //     var provider = new firebase.auth.GoogleAuthProvider();
    //     // You can add additional scopes to the provider:
    //     provider.addScope('email');
    //     provider.addScope('user_friends');
    //     // Sign in with popup:
    //     auth.signInWithPopup(provider).then(function (result) {
    //         // The firebase.User instance:
    //         var user = result.user;
    //         // The Facebook firebase.auth.AuthCredential containing the Facebook
    //         // access token:
    //         var credential = result.credential;
    //         console.log(user)
    //     }, function (error) {
    //         // The provider's account email, can be used in case of
    //         // auth/account-exists-with-different-credential to fetch the providers
    //         // linked to the email:
    //         var email = error.email;
    //         // The provider's credential:
    //         var credential = error.credential;
    //         // In case of auth/account-exists-with-different-credential error,
    //         // you can fetch the providers using this:
    //         if (error.code === 'auth/account-exists-with-different-credential') {
    //             auth.fetchSignInMethodsForEmail(email).then(function (providers) {
    //                 // The returned 'providers' is a list of the available providers
    //                 // linked to the email address. Please refer to the guide for a more
    //                 // complete explanation on how to recover from this error.
    //             });
    //         }
    //     });
    // }



    // dispatch({
    //     type: actionTypes.SET_USER,
    //     user: result.user,
    // })
    // console.log(result.user);

    const sigInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            // pass user cred in data layer
            console.log(result)
        }).catch((error) => {
            console.log(error)
        });


        return (
            <div className="login">
                <div className="login_logo">
                    <img src={Facebook} alt="Facebook Logo" className="logo1" />
                    <img src={FacebookLogo} className="logo2" alt="" />
                    <p>Facebook helps you connect and share with the people in your life.</p>
                </div>
                <Button type="submit" onClick={sigInWithGoogle}>Log In</Button>
            </div>
        );
    }
}

export default Login2;