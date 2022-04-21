import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {  useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {

const navigate =useNavigate()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const emailref=useRef('')
    const passwordref=useRef('')

    if(user){
        navigate('/')
    }

    const handesubmit=e =>{
        e.preventDefault()
       const email= emailref.current.value;
       const password =passwordref.current.value;
       console.log(email ,password)
       signInWithEmailAndPassword(email, password)
    }




    return (
        <div className="md:w-80 mt-10 shadow-lg mx-auto">
            <p className='font-bold p-2 font-mono '>Please Log In</p>
            <form onSubmit={handesubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="Email">
                        Email
                    </label>
                    <input ref={emailref} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Username" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input ref={passwordref} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    <p className="text-red-500 text-xs italic">Please Enter your password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <input type="submit" value="Log In" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
                    <button className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                        Forgot Password?
                    </button>
                </div>
            </form>
            <div className='flex justify-center p-2'>
                <button className='p-2 rounded-lg font-bold font-mono text-blue-400 bg-light mx-auto'>LOG IN WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Login;