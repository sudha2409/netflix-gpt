import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const[isSinInForm,setIsSignInForm] = useState(true);

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSinInForm);

  }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web_tall_panel/IN-en-20250303-TRIFECTA-perspective_8d2f60cf-007f-4f25-99b0-7c0b77f38bc1_large.jpg" alt="" />
        </div>
        <form className=' w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80'>
          <h1 className='font-bold text-3xl py-4 '>{isSinInForm? "Sign In" : "Sign Up"}</h1>
          {!isSinInForm  &&   <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 bg-opacity-60' />}
          <input type="email" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 bg-opacity-60' />
          <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700 bg-opacity-60' />
          <button className='p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer' >{isSinInForm ? "Sign In" : "Sign Up"}</button>
          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSinInForm ? "New To Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login