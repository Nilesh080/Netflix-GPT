import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validateForm";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { BG_URL } from "../utils/constant";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [message , setMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = () => {
    const errMessage = validateForm(email.current.value, password.current.value);
    setMessage(errMessage);
    if(errMessage) return;
    //signin/signup
    if(isSignUp){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setMessage(errorCode+": "+errorMessage);
            // ..
        });
    } else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setMessage(errorCode+": "+errorMessage)
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen md:object-cover md:w-screen object-cover"
          src={BG_URL}
          alt=""
        />
      </div>
      <form
        className="w-full absolute p-10 bg-black md:w-3/12  my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        {isSignUp === true ? (
          <h1 className="font-bold text-3xl w-full py-4 my-2">Sign Up</h1>
        ) : (
          <h1 className="font-bold text-3xl w-full py-4 my-2">Sign In</h1>
        )}

        {isSignUp && (
          <input
            type="name"
            placeholder="Full Name"
            className="p-3 my-2 bg-gray-600 w-full rounded-lg"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Ex: test@gmail.com"
          className="p-3 my-2 bg-gray-600 w-full rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password Ex: Test@123"
          className="p-3 my-2 bg-gray-600 w-full rounded-lg"
        />
        <p className="text-red-500 font-bold pt-3">{message}</p>
        <button
          className="py-3 p-4 my-8 w-full bg-red-600 rounded-lg"
          onClick={handleSubmit}
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <button onClick={toggleForm}>
          {isSignUp ? (
            <div className="flex">
            <p>
              Already registered? </p>
              <p className="hover:underline cursor-pointer inline mx-1">
                Sign in now
              </p>
              </div>
          ) : (
            <div className="flex">
            <p>
              New to Netflix?</p>
              <p className="hover:underline cursor-pointer inline mx-1">
                Sign up now
              </p>
            
            </div>
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
