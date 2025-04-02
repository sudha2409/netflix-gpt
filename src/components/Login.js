import React, { useRef, useState } from 'react'
import Header from './Header'
import { ValidateData } from '../utils/validate';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  const[isSinInForm,setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] =  useState(null);

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSinInForm);

  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleButtonClick = () =>{
     // Validate the form Data 
    const msg =  ValidateData(email.current.value,password.current.value);
    setErrorMessage(msg);
  
    if(!isSinInForm)
    // SignUp Form
  {
    createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {

    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      console.log(user);
      navigate("/browse");

    }).catch((error) => {
     setErrorMessage(error.message);
    });

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " :- " + errorMessage);

  });

  }
  else{
    //SignIn Form
    signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " :- " + errorMessage);
  });

  }
  };
  return (

    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web_tall_panel/IN-en-20250303-TRIFECTA-perspective_8d2f60cf-007f-4f25-99b0-7c0b77f38bc1_large.jpg" alt="" />
        </div>
        <form onSubmit={(e)=> e.preventDefault()} className=' w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80'>
          <h1 className='font-bold text-3xl py-4 '>{isSinInForm? "Sign In" : "Sign Up"}</h1>
          {!isSinInForm  &&   <input  ref={name} type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 bg-opacity-60' />}
          <input ref={email} type="email" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 bg-opacity-60' />
          <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700 bg-opacity-60' />
          <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

          <button className='p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer' onClick={handleButtonClick} >{isSinInForm ? "Sign In" : "Sign Up"}</button>

          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSinInForm ? "New To Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login