import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const HomePage = ({ loginStatus, setLoginStatus }) => {
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setLoginStatus(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // console.log("HomePage UE ",loginStatus);
    if (loginStatus) {
      navigate("/list");
    }
  }, [loginStatus]);

  return (
    <div>
      <div className="header">My Backlog Record</div>
      <div className="welcome">
        “We are what we repeatedly do. Excellence, then, is not an act, but a
        habit.”
      </div>
      <div className="author"> － Will Durant</div>
      {/* </div> */}
      <div className="btn-part-in">
        <button className="sign-in" onClick={signInWithGoogle}>
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default HomePage;
