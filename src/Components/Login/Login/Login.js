import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../../App";
import { firebaseConfig } from "../../../firebase.config";
import "./Login.css";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || {
    from: { pathname: `/` },
  };

  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    fetch("https://cryptic-retreat-15947.herokuapp.com/admins")
      .then((res) => res.json())
      .then((admin) => setAdmins(admin));
  }, []);

  const [error, setError] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [newUser, setNewUser] = useState(false);
  const [signedInUser, setSignedInUser] = useState({
    name: "",
    email: "",
    isAdmin: false,
  });
  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        const newUser = { ...signedInUser };
        newUser.email = user.email;
        newUser.name = user?.displayName;
        setSignedInUser(newUser);
        setLoggedInUser(newUser);
        const checkAdmin = admins.find((admin) => admin.email == user.email);
        if (checkAdmin) {
          newUser.isAdmin = true;
          setLoggedInUser(newUser);
        }

        history.replace(from);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });
  };

  return (
    <>
      <div className="login">
        <div className="login-box mt-5 p-5">
          <h3 className="text-white">Login With</h3>
          <br />
          <button className="login-btn text-left" onClick={handleGoogleSignIn}>
            <img
              alt=""
              width="30px"
              src="https://img.icons8.com/color/48/000000/google-logo.png"
            />
            <b className="pr-5">Continue with Google</b>
          </button>

          <p style={{ color: "red" }}>{error.errorMessage}</p>
        </div>
      </div>
    </>
  );
};

export default Login;
